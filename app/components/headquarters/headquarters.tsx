"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";

export const Headquarters: React.FC = () => {
  interface Headquarters {
    address: string;
    city: string;
    state: string;
  }

  interface Links {
    website: string;
    flickr: string;
    twitter: string;
    elon_twitter: string;
  }

  interface CompanyData {
    name: string;
    founder: string;
    founded: number;
    employees: number;
    vehicles: number;
    launch_sites: number;
    test_sites: number;
    ceo: string;
    cto: string;
    coo: string;
    cto_propulsion: string;
    valuation: number;
    headquarters: Headquarters;
    links: Links;
    summary: string;
  }

  const [company, setCompany] = useState<CompanyData | null>(null);

  useEffect(() => {
    const fetchCompany = async () => {
      const res = await fetch("https://api.spacexdata.com/v4/company");
      const data = await res.json();
      setCompany(data);
    };
    fetchCompany();
  }, []);

  return (
    <>
      <Card
        className={"rounded-lg border-2 mx-10 mt-2 bg-blue-950 py-4 text-white"}
      >
        {!company ? (
          "loading"
        ) : (
          <section className={"showcase"}>
            <div className={"overlay"}>
              <CardTitle className={"text-2xl font-bold text-center mt-4"}>
                About SpaceX
              </CardTitle>
              <CardContent>
                <div
                  className={
                    "grid grid-cols-1 gap-5 lg:grid-cols-3 max-w-4xl mx-auto mt-10 lg:gap-20 px-5"
                  }
                >
                  <article>
                    <h2
                      className={
                        "font-bold border-b-2 border-white text-xl mb-3 pb-2 uppercase tracking-wider"
                      }
                    >
                      About
                    </h2>
                    <ul className={"text-sm opacity-75"}>
                      <li className="mb-1">{company.name} was founded by</li>
                      <li className="mb-1">{company.founder} in the year</li>
                      <li className="mb-1">{company.founded}.</li>
                      <li className="mb-1">
                        It has {company.employees} employess,
                      </li>
                      <li className="mb-1">{company.vehicles} vehicles,</li>
                      <li className="mb-1">
                        {company.launch_sites} launch sites,
                      </li>
                      <li className="mb-1">
                        and {company.test_sites} test sites and
                      </li>
                      <li className="mb-1">
                        is valued at {company.valuation.toLocaleString()} B
                      </li>
                    </ul>
                  </article>

                  <article>
                    <h2
                      className={
                        "font-bold border-b-2 border-white text-xl mb-3 pb-2 uppercase tracking-wider"
                      }
                    >
                      Headquarters
                    </h2>
                    <ul className={"text-sm opacity-75"}>
                      <li className="mb-1">{company.headquarters.address}</li>
                      <li className="mb-1">{company.headquarters.city}</li>
                      <li className="mb-1">{company.headquarters.state}</li>
                    </ul>
                  </article>

                  <article>
                    <h2
                      className={
                        "font-bold border-b-2 border-white text-xl mb-3 pb-2 uppercase tracking-wider"
                      }
                    >
                      Useful Links
                    </h2>
                    <ul className={"text-sm opacity-75"}>
                      <li className="mb-1">
                        <a href={company.links.website}>Website</a>
                      </li>
                      <li className="mb-1">
                        <a href={company.links.flickr}>Flickr</a>
                      </li>
                      <li className="mb-1">
                        <a href={company.links.twitter}>Twitter</a>
                      </li>
                      <li className="mb-1">
                        <a href={company.links.elon_twitter}>Elon Twitter</a>
                      </li>
                    </ul>
                  </article>
                </div>
              </CardContent>

              <p className={"max-w-3xl mx-auto text-center mt-10"}>
                {company.summary}
              </p>
            </div>
          </section>
        )}
      </Card>
    </>
  );
};
