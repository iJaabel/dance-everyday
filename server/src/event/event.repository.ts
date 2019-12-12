import { EntityRepository, Repository, getCustomRepository } from 'typeorm';
import { Event } from './event.entity';
import { CreateEventDto } from './dto/createevent.dto';
import { NotAcceptableException, NotFoundException } from '@nestjs/common';
import { FilterEventDto } from './dto/filter-event.dto';
import VenueRepository from 'src/venue/venue.repository';
import { UpdateEventDto } from './dto/updatevent.dto';

@EntityRepository(Event)
export class EventRepository extends Repository<Event> {
  async createEvent(
    { venueName, description }: CreateEventDto,
    name: string,
    date: string,
  ): Promise<Event> {
    const venueRepository = getCustomRepository(VenueRepository);

    const venue = await venueRepository.getVenueByName(venueName);

    if (!venue) {
      throw new NotAcceptableException(
        `Venue with name ${venueName} does not exist`,
      );
    }

    const event = new Event();

    event.name = name;
    event.description = description;
    event.date = date;

    await event.save();
    await venue.events.push(event);
    await venue.save();

    return event;
  }

  async getEvents(filterEventDto: FilterEventDto): Promise<Event[]> {
    const query = this.createQueryBuilder('event');
    const search = filterEventDto.search;
    if (search) {
      query.where('(event.name LIKE :search)', {
        search: `%${search}%`,
      });
    }

    const events = await query.getMany();
    return events;
  }

  async updateEvent(
    { description }: UpdateEventDto,
    id: number,
    name: string,
    date: string,
  ): Promise<Event> {
    const event = await this.findOne(id);

    if (!event) {
      throw new NotAcceptableException(`Event with ${id} is invalid`);
    }

    event.name = name;
    event.date = date;
    event.description = description;

    event.save();
    return event;
  }

  async deleteEvent(id: number): Promise<void> {
    const result = await this.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(`This event with id ${id} does not exist!`);
    }
  }
}