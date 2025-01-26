// components/ActivityDetail.tsx
 
import { Spacer } from "@nextui-org/spacer";
import WeatherCard from "./weatherCard";
import Map from "./map"; // Import the Map component

interface Activity {
  id: string;
  title: string;
  description: string;
  location: {
    lat: number;
    lng: number;
  };
}

interface ActivityDetailProps {
  activity: Activity;
}

const ActivityDetail: React.FC<ActivityDetailProps> = ({ activity }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      {/* Weather Card */}
      <div
        className="text-center"
        style={{
          display: "grid",
          placeItems: "center",
        }}
      >
        <WeatherCard />
      </div>

      {/* Activity Title */}
      <h1 className="text-4xl font-bold text-gray-800 text-center">
        {activity.title}
      </h1>

      {/* Activity Description */}
      <div className="prose max-w-2xl mx-auto text-center">
        <p className="text-lg text-gray-600">{activity.description}</p>
      </div>

      <Spacer y={2} />

      {/* Location Map */}
      <div className="max-w-2xl mx-auto">
        <Map location={activity.location} />
      </div>

      {/* Additional Content Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">
            What to Bring
          </h2>
          <ul className="list-disc pl-6 text-gray-600">
            <li>Comfortable hiking shoes</li>
            <li>Water bottle (2L recommended)</li>
            <li>Sunscreen and hat</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">
            Meeting Point
          </h2>
          <p className="text-gray-600">
            Mountain Base Camp, North Entrance
            <br />
            Arrive 30 minutes before departure
          </p>
        </div>
      </div>
    </div>
  );
};

export default ActivityDetail;
