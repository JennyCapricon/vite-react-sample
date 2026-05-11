import FeedCard from "../FeedCard";

function FeedGrid() {
  return (
    <div className="
      grid 
      grid-cols-3 
      gap-4"
    >
      <FeedCard title="Jenny World" />
      <FeedCard title="Daniel" />
      <FeedCard title="Elvis" />

      <FeedCard title="Ekene" />
      <FeedCard title="Joseph" />
      <FeedCard title="Uche" />

      <FeedCard title="Micheal" />
      <FeedCard title="Melody" />
      <FeedCard title="Dinero" />
    </div>

  );
}

export default FeedGrid;