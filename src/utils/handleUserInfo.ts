import type { InfoProps } from "../hooks/useDetails";
import type { User } from "../slice";

export const handleUserInfo = (user: User): InfoProps[] => [
  {
    subheader: "Personal Information",
    data: [
      { primary: "Name", secondary: user.name },
      { primary: "Email", secondary: user.email },
      { primary: "Phone", secondary: user.phone },
      { primary: "Website", secondary: user.website },
    ],
  },
  {
    subheader: "Address",
    data: [
      { primary: "City", secondary: user.address.city },
      { primary: "Street", secondary: user.address.street },
      { primary: "Suite", secondary: user.address.suite },
      { primary: "Zipcode", secondary: user.address.zipcode },
      {
        primary: "Geo",
        secondary: `lat: ${user.address.geo.lat} lng: ${user.address.geo.lng}`,
      },
    ],
  },
  {
    subheader: "Company",
    data: [
      { primary: "Name", secondary: user.company.name },
      { primary: "Catch Phrase", secondary: user.company.catchPhrase },
      { primary: "BS", secondary: user.company.bs },
    ],
  },
];
