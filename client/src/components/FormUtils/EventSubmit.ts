import { PostEvent } from "../types/event.interfaces";
import Axios from "axios";
import { errorLogger } from "../api/errorLogger";

export const OnEventSubmit = async (values: PostEvent): Promise<void> => {
  const url = `http://localhost:3001/events/create`;
  const data = await Axios.post(url, {
    name: values.name,
    date: values.eventDate,
    description: values.description,
    venueName: values.venueName
  })
    .then(res => console.log(res))
    .catch(err => {
      errorLogger(err);
    });

  return data;
};
