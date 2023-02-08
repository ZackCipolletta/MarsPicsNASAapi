export default class MarsImages {
  static async getImages(date) {
    try {
      const response = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?camera=MAHLI&api_key=${process.env.API_KEY}&earth_date=${date}`);
      const jsonifiedResponse = await response.json();
      if (!response.ok) {
        const errorMessage = `${response.status} ${response.statusText}`;
        throw new Error(errorMessage);
      }
      return jsonifiedResponse;
    } catch (error) {
      return error;
    }
  }
}