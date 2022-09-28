import axios from "axios";

export const getSliderData = async () => {
  const url = "https://60bf926697295a0017c433e8.mockapi.io/api/candee/";
  const res = await axios.get(`${url}/sliders`);
  return res;
};
