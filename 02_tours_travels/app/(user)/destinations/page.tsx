import Image from "next/image";
import Link from "next/link";
import { TouristPlace } from "@/types/allTypes";
import { connectDB } from "@/backend/config/mongoose.config";
import PlacesDao from "@/backend/model/places.model";

// Server Component — queries MongoDB directly.
// Never use fetch("http://localhost:...") in server components:
// the server isn't running during `next build` / Vercel build.
const DestinationsPage = async () => {
    await connectDB();
    const touristPlaces: TouristPlace[] = await PlacesDao.find({ isActive: true }).lean();

    return (
        <div className="container mx-auto grid grid-cols-4 gap-4 p-6">
            {touristPlaces.map((place) => (
                <PlaceCard key={place._id} place={place} />
            ))}
        </div>
    );
};

export default DestinationsPage;

const PlaceCard = ({ place }: { place: TouristPlace }) => {
    const { name, city, state, country, image, url, slug } = place;

    return (
        <Link href={`destinations/${slug}`}>
            <div className="group relative overflow-hidden rounded-2xl transition-shadow hover:shadow-xl">
                <Image
                    src={image}
                    alt={name}
                    width={400}
                    height={400}
                    loading="eager"
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="glassmorphism absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>
                <span className="absolute bottom-0 left-0 text-white p-6 text-xl">
                    {name}
                    <p>
                        {name === city ? state : `${city}, ${state}`}
                    </p>
                </span>
            </div>
        </Link>
    );
};
