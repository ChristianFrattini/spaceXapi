"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const Rockets: React.FC = () => {
  interface RocketsData {
    id: string;
    name: string;
    flickr_images: string;
    description: string;
  }

  const [rockets, setRockets] = useState<RocketsData[]>([]);
  useEffect(() => {
    const fetchRockets = async () => {
      const res = await fetch("https://api.spacexdata.com/v4/rockets");
      const data = await res.json();
      setRockets(data);
    };
    fetchRockets();
  }, []);

  return (
    <>
      {!rockets ? (
        "loading"
      ) : (
        <section>
          <div
            className={"max-width grid grid-cols-1 gap-5  lg:grid-cols-3 px-5"}
          >
            {rockets.map(({ id, name, flickr_images, description }) => (
              <Card className={"bg-zinc-900 py-2 mb-7"} key={id}>
                <Link href={`/rockets/${id}`}>
                  <div className={"flex justify-center items-center pt-2"}>
                    <img
                      src={flickr_images[0]}
                      alt={name}
                      className={"h-64 w-full object-cover rounded-lg "}
                    />
                  </div>
                  <div className={"p-5"}>
                    <CardTitle
                      className={"font-bold text-white mb-3 pl-6 text-lg"}
                    >
                      {name}
                    </CardTitle>
                    <CardContent className={"text-left "}>
                      <p
                        className={"text-white opacity-75 mb-10"}
                      >{`${description.substring(0, 100)}...`}</p>
                      <Link href={`/rockets/${id}`} className={"text-white"}>
                        Read More &rarr;
                      </Link>
                    </CardContent>
                  </div>
                </Link>
              </Card>
            ))}
          </div>
        </section>
      )}
    </>
  );
};
