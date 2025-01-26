export async function getCurrentLocation(): Promise<{ latitude: number; longitude: number } | null> {
    if (typeof window === "undefined") {
      console.error("Geolocation is not available on the server.");
      return null;
    }
  
    return new Promise((resolve, reject) => {
      if (!navigator.geolocation) {
        console.error("Geolocation is not supported by your browser.");
        return reject(null);
      }
  
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          resolve({ latitude, longitude });
        },
        (error) => {
          console.error("Error getting location:", error);
          reject(null);
        }
      );
    });
  }
  