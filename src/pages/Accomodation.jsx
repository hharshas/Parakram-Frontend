import React, { useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";

import AccCard from "../components/AccomodationCardComp/AccCard";
import transition from "../transition";

function Accomodation() {
  useEffect(() => {
    scroll.scrollToTop({ duration: 1000 });
  }, []);

  const CardDetails = [
    {
      title: "Platinum",
      modalDisc:
        "For those who want to stay in the IIT-ISM campus A registration fee of Rs. 1949/- (Non-Refundable) per member of the contingent including participants, coaches, and accompanying staff (if any) include: Participation fees Three meals per day for three days (Breakfast, Lunch and Dinner) Accommodation inside campus (For 3 days) Transportation to and fro the Railway station to IIT-ISM Campus An attractive welcome kit for each participant. Pro Nights ( EDM night, Band night etc) Refreshments in between the matches Merchandise(Jacket) ",
      discription:
        "For those who want to stay in the IIT-ISM campus A registration fee of Rs. 1949/- (Non-Refundable)",
      price: 1949,
    },
    {
      title: "Gold",
      modalDisc:
        "For those who want to stay in the IIT-ISM campus A registration fee of Rs. 1549/- (Non-Refundable) per member of the contingent including participants, coaches, and accompanying staff (if any) include: Participation fees Three meals per day for three days (Breakfast, Lunch and Dinner) Accommodation inside campus (For 3 days) Transportation to and fro the Railway station to IIT-ISM Campus An attractive welcome kit for each participant. Pro Nights (EDM night, Band night etc) Refreshments in between the matches Merchandise(T-Shirt) ",
      discription:
        "For those who want to stay in the IIT-ISM campus A registration fee of Rs. 1549/- (Non-Refundable)",
      price: 1549,
    },
    {
      title: "Silver",
      modalDisc:
        "For those who want to stay in the IIT-ISM campus A registration fee of Rs. 1199/- (Non-Refundable) per member of the contingent including participants, coaches, and accompanying staff (if any) include: Participation fees Three meals per day for three days (Breakfast, Lunch and Dinner) Accommodation inside campus (For 3 days) Transportation to and fro the Railway station to IIT ISM Campus An attractive welcome kit for each participant. Pro Nights (EDM night, Band Night etc) Refreshments in between the matches",
      discription:
        "For those who want to stay in the IIT-ISM campus A registration fee of Rs. 1199/- (Non-Refundable)",
      price: 1199,
    },
    {
      title: "Bronze",
      modalDisc:
        "For those who don‘t want to stay in the IIT-ISM campus A registration fee of Rs. 1299/- (Non-Refundable) per member of the contingent including participants, coaches, and accompanying staff (if any) include: Participation fees An attractive welcome kit for each participant. Pro Nights (EDM night, Band Night etc) Refreshments in between the matches Merchandise(Jacket) ",
      discription:
        "For those who don‘t want to stay in the IIT-ISM campus A registration fee of Rs. 1299/- (Non-Refundable)",
      price: 1299,
    },
    {
      title: "clay",
      modalDisc:
        "For those who doesn't want to stay in the IIT-ISM campus A registration fee of Rs. 899/- (Non-Refundable) per member of the contingent including participants, coaches, and accompanying staff (if any) include: Participation fees An attractive welcome kit for each participant. Pro Nights (EDM night, Band Night etc) Refreshments in between the matches Merchandise(T-shirt) ",
      discription:
        "For those who doesn't want to stay in the IIT-ISM campus A registration fee of Rs. 899/- (Non-Refundable)",
      price: 899,
    },
    {
      title: "air",
      modalDisc:
        "For those who don’t want to stay in the IIT-ISM campus A registration fee of Rs. 399/- (Non-Refundable) per member of the contingent including participants, coaches, and accompanying staff (if any) include: Participation fees Pro Nights (EDM night, Band Night etc) Refreshments in between the matches",
      discription:
        "For those who don’t want to stay in the IIT-ISM campus A registration fee of Rs. 399/- (Non-Refundable)",
      price: 399,
    },
  ];
  return (
    <div className="flex justify-center items-center bg-black">
      <div className="my-20 grid sm:grid-cols-4 sm:gap-x-8 grid-cols-2 gap-y-4">
        {CardDetails.map((val, ind) => {
          return <AccCard {...val} key={ind} />;
        })}
      </div>
    </div>
  );
}

export default transition(Accomodation);
