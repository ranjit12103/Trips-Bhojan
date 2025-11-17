import React from "react";
import Header from "../../components/Header";
import { allTrips, menuItems } from "../../components/index";
import TripsCard from "../../components/TripsCard";
import BhojanCard from "../../components/BhojanCard";

const UserDashboard = () => {
  const user = { name: "Patil" };

  return (
    <main className="dashboard wrapper">
      {/* Header Section */}
      <Header
        title={`Welcome ${user?.name ?? "Guest"} 👋`}
        description="Track activity, trends and popular destinations in real time"
      />

      {/* Trips Section */}
      <section className="flex flex-col gap-6">
        <section className="container">
          <h1 className="text-xl font-semibold text-dark-100">
            Created Trips
          </h1>

          <div className="trip-grid">
            {allTrips.slice(0, 4).map(
              ({ id, name, imageUrls, itinerary, tags, estimatedPrice }) => (
                <TripsCard
                  key={id}
                  id={id.toString()}
                  name={name}
                  imageUrl={imageUrls?.[0]}
                  location={itinerary?.[0]?.location ?? ""}
                  tags={tags}
                  price={estimatedPrice}
                />
              )
            )}
          </div>
        </section>

        {/*🍲 Menu Suggestions Section */}
        <section className="container">
            <h2 className="text-xl font-semibold text-dark-100 mb-4">
            Created Bhojan
            </h2>

          <div className="menu-grid">
            {menuItems.slice(0, 4).map(
              ({ id, name, imageUrls, mealType, dietType, estimatedPrice }) => (
                <BhojanCard
                  key={id}
                  id={id.toString()}
                  name={name}
                  imageUrl={imageUrls?.[0]}
                  mealType={mealType}
                  dietType={dietType}
                  price={estimatedPrice}
                />
              )
            )}
          </div>
        </section>

      </section>
    </main>
  );
};

export default UserDashboard;
