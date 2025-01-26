import { title } from "@/components/primitives";
import WeatherCard from "@/components/weatherCard";
import ActivitiesGrid from "@/components/HorizantalScrollActivities";
import VerticalScrollActivities from "@/components/verticalScrollActivities";

export default function AboutPage() {
  const mostRecommended = [
    {
      id: "1",
      image: null,
      title: "Top Activity 1",
      description: "Most popular choice",
    },
    {
      id: "2",
      image: null,
      title: "Top Activity 2",
      description: "Highly rated experience",
    },
    {
      id: "3",
      image: null,
      title: "Top Activity 3",
      description: "Editor's pick",
    },
    {
      id: "4",
      image: null,
      title: "Top Activity 4",
      description: "Local favorite",
    },
  ];

  const otherActivities = [
    {
      id: "5",
      image: null,
      title: "Hiking Adventure",
      description: "Mountain trails exploration",
    },
    {
      id: "6",
      image: null,
      title: "City Tour",
      description: "Historical landmarks visit",
    },
    {
      id: "7",
      image: null,
      title: "Cooking Class",
      description: "Local cuisine workshop",
    },
    {
      id: "8",
      image: null,
      title: "Water Sports",
      description: "Beach activities package",
    },
    {
      id: "9",
      image: null,
      title: "Wine Tasting",
      description: "Vineyard tour experience",
    },
    {
      id: "10",
      image: null,
      title: "Photography Walk",
      description: "Scenic spots tour",
    },
  ];

  return (
    <div className="space-y-8 pb-8">
      {/* Greeting Section */}
      <div className="container mx-auto px-4 text-center space-y-4">
        <h1
          className={title({
            class: "text-5xl md:text-6xl font-bold mb-4",
          })}
        >
          Welcome Back, Simo! 🌟
        </h1>
        <p className="text-xl md:text-2xl text-default-600 italic">
          "Adventure is worthwhile in itself. Every journey opens new horizons."
          <br />
          <span className="text-sm">- Amelia Earhart</span>
        </p>
      </div>

      {/* Weather Section */}
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <WeatherCard />
        </div>
      </div>

      {/* Rest of your existing sections... */}
      {/* Most Recommended Activities */}
      <div className="container mx-auto px-4">
        <h2 className={title({ class: "mb-10" })}>
          Most Recommended Activities
        </h2>
        <ActivitiesGrid activities={mostRecommended} />
      </div>

      {/* Other Recommended Activities */}
      <div className="container mx-auto px-4">
        <h2 className={title({ class: "mb-6" })}>
          Other Recommended Activities
        </h2>
        <VerticalScrollActivities activities={otherActivities} />
      </div>
    </div>
  );
}
