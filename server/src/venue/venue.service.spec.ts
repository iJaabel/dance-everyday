import { Test } from '@nestjs/testing';
import { VenueService } from './venue.service';
import VenueRepository from './venue.repository';
import { NotFoundException } from '@nestjs/common';

const mockVenueRepository = () => ({
  getVenueById: jest.fn(),
  getAllVenues: jest.fn(),
  createVenue: jest.fn(),
  createNewVenue: jest.fn(),
  findOne: jest.fn(),
  delete: jest.fn(),
});

describe('VenueService', () => {
  let venueService;
  let venueRepository;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        VenueService,
        { provide: VenueRepository, useFactory: mockVenueRepository },
      ],
    }).compile();
    venueService = await module.get<VenueService>(VenueService);
    venueRepository = await module.get<VenueRepository>(VenueRepository);
  });

  describe('getAllVenues', () => {
    it('should return a list of all venues', async () => {
      venueRepository.getAllVenues.mockResolvedValue('Some value');

      expect(venueRepository.getAllVenues).not.toHaveBeenCalled();

      const venues = await venueService.getAllVenues();

      expect(venueRepository.getAllVenues).toHaveBeenCalled();
      expect(venues).toEqual('Some value');
    });
  });
  describe('getVenueById', () => {
    it('should return a specific venue by its ID', async () => {
      const mockVenue = {
        id: 1,
        name: 'test name',
        location: 'test location',
        phone: 'test phone',
        createdAt: Date,
        events: [],
      };
      venueRepository.findOne.mockResolvedValue(mockVenue);

      const result = await venueService.getVenueById(1);
      expect(result).toEqual(mockVenue);
      expect(venueRepository.findOne).toHaveBeenCalledWith(1);
    });

    it('should should throw a NotAcceptableException when the ID is false', () => {});
  });

  describe('createVenue', () => {
    it('should return a venue with the given params', async () => {
      const mockCreateVenueDto = {
        name: 'some name',
        location: 'some location',
        phone: 'some phone',
      };
      const name = mockCreateVenueDto.name;

      venueRepository.createNewVenue.mockResolvedValue(mockCreateVenueDto);

      const newVenue = await venueService.createVenue(mockCreateVenueDto, name);

      expect(venueRepository.createNewVenue).toHaveBeenCalledWith(
        mockCreateVenueDto,
        name,
      );

      expect(newVenue).toEqual(mockCreateVenueDto);
    });

    describe('deleteVenue', () => {
      it('should delete a venue once it is called', async () => {
        venueRepository.delete.mockResolvedValue({ affected: 1 });
        expect(venueRepository.delete).not.toHaveBeenCalled();
        await venueService.deleteVenue(1);
        expect(venueRepository.delete).toHaveBeenCalled();
      });

      it('should return a NotFoundException if value for ', () => {
        venueRepository.delete.mockResolvedValue({ affected: 0 });
        expect(venueService.deleteVenue(1)).rejects.toThrow(NotFoundException);
      });
    });
  });
});
