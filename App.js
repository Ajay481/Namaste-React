import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 * -logo
 * -Nav Items
 * Body
 * -Search
 * -Restaurant Card
 *  -Img
 *  -Name
 *  -Ratings
 *  -Cuisine
 *  -Delivery Time
 * Footer
 * -Copyright
 * -Links
 * -Address
 * -Contact
 */

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const resCard = [
  {
    cardType: "restaurant",
    layoutAlignmentType: "VERTICAL",
    data: {
      type: "restaurant",
      data: {
        type: "F",
        id: "647336",
        name: "Sarvottam Restaurant",
        uuid: "b9870b53-9f04-45bc-adc5-ea31e3183fe5",
        city: "10140",
        area: "Old Town",
        totalRatingsString: "Too Few Ratings",
        cloudinaryImageId: "be4fba7abb3316c871b232f299a782da",
        cuisines: ["North Indian", "Biryani", "Snacks"],
        tags: [],
        costForTwo: 30000,
        costForTwoString: "₹300 FOR TWO",
        deliveryTime: 33,
        minDeliveryTime: 33,
        maxDeliveryTime: 33,
        slaString: "33 MINS",
        lastMileTravel: 0.699999988079071,
        slugs: {
          restaurant: "sarvottam-restaurant-old-town-old-town",
          city: "bharuch",
        },
        cityState: "10140",
        address:
          "MILKAT NO.05060 A 0203300101 C,PEREDIZE COMPLEX,COLLAGE ROAD,AT & POST-BHOLAV,TAL & DIS-BHARUCH ,Bharuch,Bharuch,Gujarat-392001",
        locality: "Peredize Complex",
        parentId: 178558,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: "Free delivery",
          shortDescriptionList: [
            {
              meta: "Free delivery",
              discountType: "FREE_DELIVERY",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "Free delivery",
              discountType: "FREE_DELIVERY",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        aggregatedDiscountInfoV2: {
          header: "",
          shortDescriptionList: [
            {
              meta: "Free Delivery",
              discountType: "FREE_DELIVERY",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "Free delivery",
              discountType: "FREE_DELIVERY",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        chain: [],
        feeDetails: {
          fees: [],
          totalFees: 0,
          message: "",
          title: "",
          amount: "",
          icon: "",
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID: "",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: "0.6 kms",
        hasSurge: false,
        sla: {
          restaurantId: "647336",
          deliveryTime: 33,
          minDeliveryTime: 33,
          maxDeliveryTime: 33,
          lastMileTravel: 0.699999988079071,
          lastMileDistance: 0,
          serviceability: "SERVICEABLE",
          rainMode: "NONE",
          longDistance: "NOT_LONG_DISTANCE",
          preferentialService: false,
          iconType: "EMPTY",
        },
        promoted: false,
        avgRating: "--",
        totalRatings: 0,
        new: false,
      },
      subtype: "basic",
    },
    parentWidget: false,
  },
  {
    cardType: "restaurant",
    layoutAlignmentType: "VERTICAL",
    data: {
      type: "restaurant",
      data: {
        type: "F",
        id: "175645",
        name: "Real Paprika",
        uuid: "78b5fe1a-2919-43e7-a6b9-9e7566d57da7",
        city: "10140",
        area: "Zadeshwar",
        totalRatingsString: "100+ ratings",
        cloudinaryImageId: "iheofpboee8gozrfd9kf",
        cuisines: ["Pastas", "Chinese", "Ice Cream", "Pizzas"],
        tags: [],
        costForTwo: 20000,
        costForTwoString: "₹200 FOR TWO",
        deliveryTime: 35,
        minDeliveryTime: 35,
        maxDeliveryTime: 35,
        slaString: "35 MINS",
        lastMileTravel: 1.2000000476837158,
        slugs: {
          restaurant: "reyal-paprika-bharuch-locality-phase-one",
          city: "bharuch",
        },
        cityState: "10140",
        address: "49/49, Rang Complex, Zadeshwar Road",
        locality: "Rang Complex",
        parentId: 4922,
        unserviceable: false,
        veg: true,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: "60% off",
          shortDescriptionList: [
            {
              meta: "60% off | Use WELCOMEBACK",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "60% off up to ₹100 | Use code WELCOMEBACK",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        aggregatedDiscountInfoV2: {
          header: "60% OFF",
          shortDescriptionList: [
            {
              meta: "Use WELCOMEBACK",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "60% off up to ₹100 | Use code WELCOMEBACK",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        chain: [],
        feeDetails: {
          fees: [],
          totalFees: 0,
          message: "",
          title: "",
          amount: "",
          icon: "",
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID: "",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: "1.2 kms",
        hasSurge: false,
        sla: {
          restaurantId: "175645",
          deliveryTime: 35,
          minDeliveryTime: 35,
          maxDeliveryTime: 35,
          lastMileTravel: 1.2000000476837158,
          lastMileDistance: 0,
          serviceability: "SERVICEABLE",
          rainMode: "NONE",
          longDistance: "NOT_LONG_DISTANCE",
          preferentialService: false,
          iconType: "EMPTY",
        },
        promoted: false,
        avgRating: "3.5",
        totalRatings: 100,
        new: false,
      },
      subtype: "basic",
    },
    parentWidget: false,
  },
  {
    cardType: "restaurant",
    layoutAlignmentType: "VERTICAL",
    data: {
      type: "restaurant",
      data: {
        type: "F",
        id: "212381",
        name: "New Thakor Restaurant",
        uuid: "36f6ece2-2c95-46ba-bd37-b3dedd9d1ee4",
        city: "10140",
        area: "Shaktinath Circle",
        totalRatingsString: "500+ ratings",
        cloudinaryImageId: "r2vr8ycq9y8itbwrcztn",
        cuisines: ["South Indian", "Biryani"],
        tags: [],
        costForTwo: 15000,
        costForTwoString: "₹150 FOR TWO",
        deliveryTime: 35,
        minDeliveryTime: 35,
        maxDeliveryTime: 35,
        slaString: "35 MINS",
        lastMileTravel: 2.5999999046325684,
        slugs: {
          restaurant: "new-thakor-restaurant-bharuch-old-town",
          city: "bharuch",
        },
        cityState: "10140",
        address:
          "162, Shaktinagar, Beside Devika Footware, Shaktinath circle, Bharuch-392001",
        locality: "Nandanvan Complex",
        parentId: 148238,
        unserviceable: false,
        veg: true,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: "60% off",
          shortDescriptionList: [
            {
              meta: "60% off | Use WELCOMEBACK",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "60% off up to ₹100 | Use code WELCOMEBACK",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        aggregatedDiscountInfoV2: {
          header: "60% OFF",
          shortDescriptionList: [
            {
              meta: "Use WELCOMEBACK",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "60% off up to ₹100 | Use code WELCOMEBACK",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        ribbon: [
          {
            type: "PROMOTED",
          },
        ],
        chain: [],
        feeDetails: {
          fees: [],
          totalFees: 0,
          message: "",
          title: "",
          amount: "",
          icon: "",
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID:
          "cid=6281903~p=4~eid=00000187-946a-d8a8-2324-3bf500b10478",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: "2.5 kms",
        hasSurge: false,
        sla: {
          restaurantId: "212381",
          deliveryTime: 35,
          minDeliveryTime: 35,
          maxDeliveryTime: 35,
          lastMileTravel: 2.5999999046325684,
          lastMileDistance: 0,
          serviceability: "SERVICEABLE",
          rainMode: "NONE",
          longDistance: "NOT_LONG_DISTANCE",
          preferentialService: false,
          iconType: "EMPTY",
        },
        promoted: true,
        avgRating: "3.7",
        totalRatings: 500,
        new: false,
      },
      subtype: "basic",
    },
    parentWidget: false,
  },
  {
    cardType: "restaurant",
    layoutAlignmentType: "VERTICAL",
    data: {
      type: "restaurant",
      data: {
        type: "F",
        id: "425322",
        name: "Pizza Hut",
        uuid: "5e38cc2c-674a-463b-a243-84e4f2a95c33",
        city: "10140",
        area: "Old Town",
        totalRatingsString: "500+ ratings",
        cloudinaryImageId: "b6ntwpsfxlp77gidb8gz",
        cuisines: ["Pizzas"],
        tags: [],
        costForTwo: 35000,
        costForTwoString: "₹350 FOR TWO",
        deliveryTime: 37,
        minDeliveryTime: 37,
        maxDeliveryTime: 37,
        slaString: "37 MINS",
        lastMileTravel: 2.200000047683716,
        slugs: {
          restaurant: "pizza-hut-bharuch-old-town",
          city: "bharuch",
        },
        cityState: "10140",
        address:
          "Pizza Hut, Shop no G13-14, Saidham Complex, opp Ashish Hotel, 392012",
        locality: "Rohini Nagar",
        parentId: 721,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: "60% off",
          shortDescriptionList: [
            {
              meta: "60% off | Use WELCOMEBACK",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "60% off up to ₹100 | Use code WELCOMEBACK",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        aggregatedDiscountInfoV2: {
          header: "60% OFF",
          shortDescriptionList: [
            {
              meta: "Use WELCOMEBACK",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "60% off up to ₹100 | Use code WELCOMEBACK",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        chain: [],
        feeDetails: {
          fees: [],
          totalFees: 0,
          message: "",
          title: "",
          amount: "",
          icon: "",
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID: "",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: "2.2 kms",
        hasSurge: false,
        sla: {
          restaurantId: "425322",
          deliveryTime: 37,
          minDeliveryTime: 37,
          maxDeliveryTime: 37,
          lastMileTravel: 2.200000047683716,
          lastMileDistance: 0,
          serviceability: "SERVICEABLE",
          rainMode: "NONE",
          longDistance: "NOT_LONG_DISTANCE",
          preferentialService: false,
          iconType: "EMPTY",
        },
        promoted: false,
        avgRating: "3.8",
        totalRatings: 500,
        new: false,
      },
      subtype: "basic",
    },
    parentWidget: false,
  },
  {
    cardType: "restaurant",
    layoutAlignmentType: "VERTICAL",
    data: {
      type: "restaurant",
      data: {
        type: "F",
        id: "697971",
        name: "Burger King",
        uuid: "5da88658-7c5f-4851-a854-dc4dc7ef813a",
        city: "10140",
        area: "Bharuch",
        totalRatingsString: "50+ ratings",
        cloudinaryImageId: "28fb13049b4e55297bb3f703cde63c35",
        cuisines: ["Burgers", "American"],
        tags: [],
        costForTwo: 35000,
        costForTwoString: "₹350 FOR TWO",
        deliveryTime: 36,
        minDeliveryTime: 36,
        maxDeliveryTime: 36,
        slaString: "36 MINS",
        lastMileTravel: 2.4000000953674316,
        slugs: {
          restaurant: "burger-king-city-center-old-town",
          city: "bharuch",
        },
        cityState: "10140",
        address:
          "Burgerking - Bus Station, Railway Station Rd, Opp. Station Depot, Bhurgu Manzil, Moficer Jin Compound, Bharuch, Gujarat 392001",
        locality: "City center",
        parentId: 166,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: "40% off",
          shortDescriptionList: [
            {
              meta: "40% off | Use SWIGGYIT",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "40% off up to ₹80 | Use code SWIGGYIT",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        aggregatedDiscountInfoV2: {
          header: "40% OFF",
          shortDescriptionList: [
            {
              meta: "Use SWIGGYIT",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "40% off up to ₹80 | Use code SWIGGYIT",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        chain: [],
        feeDetails: {
          fees: [],
          totalFees: 0,
          message: "",
          title: "",
          amount: "",
          icon: "",
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID: "",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: "2.4 kms",
        hasSurge: false,
        sla: {
          restaurantId: "697971",
          deliveryTime: 36,
          minDeliveryTime: 36,
          maxDeliveryTime: 36,
          lastMileTravel: 2.4000000953674316,
          lastMileDistance: 0,
          serviceability: "SERVICEABLE",
          rainMode: "NONE",
          longDistance: "NOT_LONG_DISTANCE",
          preferentialService: false,
          iconType: "EMPTY",
        },
        promoted: false,
        avgRating: "3.4",
        totalRatings: 50,
        new: true,
      },
      subtype: "basic",
    },
    parentWidget: false,
  },
  {
    cardType: "restaurant",
    layoutAlignmentType: "VERTICAL",
    data: {
      type: "restaurant",
      data: {
        type: "F",
        id: "674914",
        name: "Aadijay's Biryani and Kebab",
        uuid: "934a484c-4955-4f7e-9b39-c1bed29989dc",
        city: "10140",
        area: "Old Town",
        totalRatingsString: "Too Few Ratings",
        cloudinaryImageId: "a79403b3daea9a1ede0a7b1ec36bc943",
        cuisines: ["Biryani"],
        tags: [],
        costForTwo: 49900,
        costForTwoString: "₹499 FOR TWO",
        deliveryTime: 36,
        minDeliveryTime: 36,
        maxDeliveryTime: 36,
        slaString: "36 MINS",
        lastMileTravel: 1.2000000476837158,
        slugs: {
          restaurant: "aadijay's-biryani-and-kebab-old-town-old-town",
          city: "bharuch",
        },
        cityState: "10140",
        address:
          "R K Habitat, F 203, Zadeshwar Rd, near INOX Multiplex, Aalekh Society, Bholav, Bharuch, Gujarat 392001, India",
        locality: "Zadeshwar Rd",
        parentId: 403850,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: "10% off",
          shortDescriptionList: [
            {
              meta: "10% off on all orders",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
            {
              meta: "Free delivery",
              discountType: "FREE_DELIVERY",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "10% off on all orders",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
            {
              meta: "Free delivery",
              discountType: "FREE_DELIVERY",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        aggregatedDiscountInfoV2: {
          header: "10% OFF",
          shortDescriptionList: [
            {
              meta: "Free Delivery",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "10% off on all orders",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
            {
              meta: "Free delivery",
              discountType: "FREE_DELIVERY",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        chain: [],
        feeDetails: {
          fees: [],
          totalFees: 0,
          message: "",
          title: "",
          amount: "",
          icon: "",
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID: "",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: "1.2 kms",
        hasSurge: false,
        sla: {
          restaurantId: "674914",
          deliveryTime: 36,
          minDeliveryTime: 36,
          maxDeliveryTime: 36,
          lastMileTravel: 1.2000000476837158,
          lastMileDistance: 0,
          serviceability: "SERVICEABLE",
          rainMode: "NONE",
          longDistance: "NOT_LONG_DISTANCE",
          preferentialService: false,
          iconType: "EMPTY",
        },
        promoted: false,
        avgRating: "--",
        totalRatings: 0,
        new: false,
      },
      subtype: "basic",
    },
    parentWidget: false,
  },
  {
    cardType: "restaurant",
    layoutAlignmentType: "VERTICAL",
    data: {
      type: "restaurant",
      data: {
        type: "F",
        id: "234283",
        name: "Anil Pavbhaji & Fast Food",
        uuid: "81752083-e696-47a6-9662-d3936ccffa45",
        city: "10140",
        area: "Zadeshwar",
        totalRatingsString: "50+ ratings",
        cloudinaryImageId: "hhy8qjx2r4eskx8ky2si",
        cuisines: ["Fast Food"],
        tags: [],
        costForTwo: 15000,
        costForTwoString: "₹150 FOR TWO",
        deliveryTime: 35,
        minDeliveryTime: 35,
        maxDeliveryTime: 35,
        slaString: "35 MINS",
        lastMileTravel: 1.399999976158142,
        slugs: {
          restaurant: "anil-pavbhaji-&-fast-food-phase-one-phase-one",
          city: "bharuch",
        },
        cityState: "10140",
        address: "SHOP 1, HARIHARCOMPLEX, ZADESHWAR ROAD, BHOLAV, BHARUCH",
        locality: "Harihar Complex",
        parentId: 33488,
        unserviceable: false,
        veg: true,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: "Free delivery",
          shortDescriptionList: [
            {
              meta: "Free delivery",
              discountType: "FREE_DELIVERY",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "Free delivery",
              discountType: "FREE_DELIVERY",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        aggregatedDiscountInfoV2: {
          header: "",
          shortDescriptionList: [
            {
              meta: "Free Delivery",
              discountType: "FREE_DELIVERY",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "Free delivery",
              discountType: "FREE_DELIVERY",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        chain: [],
        feeDetails: {
          fees: [],
          totalFees: 0,
          message: "",
          title: "",
          amount: "",
          icon: "",
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID: "",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: "1.3 kms",
        hasSurge: false,
        sla: {
          restaurantId: "234283",
          deliveryTime: 35,
          minDeliveryTime: 35,
          maxDeliveryTime: 35,
          lastMileTravel: 1.399999976158142,
          lastMileDistance: 0,
          serviceability: "SERVICEABLE",
          rainMode: "NONE",
          longDistance: "NOT_LONG_DISTANCE",
          preferentialService: false,
          iconType: "EMPTY",
        },
        promoted: false,
        avgRating: "3.9",
        totalRatings: 50,
        new: false,
      },
      subtype: "basic",
    },
    parentWidget: false,
  },
  {
    cardType: "restaurant",
    layoutAlignmentType: "VERTICAL",
    data: {
      type: "restaurant",
      data: {
        type: "F",
        id: "591924",
        name: "Toral Chinese & Punjabi Restaurant",
        uuid: "0ee7e999-a2f2-48b8-aa53-b514a7bfa69d",
        city: "10140",
        area: "Old Town",
        totalRatingsString: "Too Few Ratings",
        cloudinaryImageId: "jwgi4undrxmcchigpnj6",
        cuisines: ["Chinese", "North Indian", "Biryani"],
        tags: [],
        costForTwo: 20000,
        costForTwoString: "₹200 FOR TWO",
        deliveryTime: 35,
        minDeliveryTime: 35,
        maxDeliveryTime: 35,
        slaString: "35 MINS",
        lastMileTravel: 1.5,
        slugs: {
          restaurant: "toral-chinese-&-punjabi-restaurant-old-town-old-town",
          city: "bharuch",
        },
        cityState: "10140",
        address: "Tulsi Dham, Jadeshwar Road,Bharuch",
        locality: "Tulsi Dham",
        parentId: 354003,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: "60% off",
          shortDescriptionList: [
            {
              meta: "60% off | Use WELCOMEBACK",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "60% off up to ₹100 | Use code WELCOMEBACK",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        aggregatedDiscountInfoV2: {
          header: "60% OFF",
          shortDescriptionList: [
            {
              meta: "Use WELCOMEBACK",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "60% off up to ₹100 | Use code WELCOMEBACK",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        chain: [],
        feeDetails: {
          fees: [],
          totalFees: 0,
          message: "",
          title: "",
          amount: "",
          icon: "",
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID: "",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: "1.5 kms",
        hasSurge: false,
        sla: {
          restaurantId: "591924",
          deliveryTime: 35,
          minDeliveryTime: 35,
          maxDeliveryTime: 35,
          lastMileTravel: 1.5,
          lastMileDistance: 0,
          serviceability: "SERVICEABLE",
          rainMode: "NONE",
          longDistance: "NOT_LONG_DISTANCE",
          preferentialService: false,
          iconType: "EMPTY",
        },
        promoted: false,
        avgRating: "--",
        totalRatings: 0,
        new: false,
      },
      subtype: "basic",
    },
    parentWidget: false,
  },
  {
    cardType: "restaurant",
    layoutAlignmentType: "VERTICAL",
    data: {
      type: "restaurant",
      data: {
        type: "F",
        id: "680858",
        name: "Zoop Cafe",
        uuid: "0ad7b0dd-dbf8-4ab1-b9a0-6f1277c1369b",
        city: "10140",
        area: "Old Town",
        totalRatingsString: "Too Few Ratings",
        cloudinaryImageId: "fcee676df41abe3fa8b474ece9d2b77d",
        cuisines: ["Beverages", "Snacks", "Burgers"],
        tags: [],
        costForTwo: 30000,
        costForTwoString: "₹300 FOR TWO",
        deliveryTime: 36,
        minDeliveryTime: 36,
        maxDeliveryTime: 36,
        slaString: "36 MINS",
        lastMileTravel: 1.399999976158142,
        slugs: {
          restaurant: "zoop-cafe-old-town-old-town-2",
          city: "bharuch",
        },
        cityState: "10140",
        address:
          "SHOP NO. 02, GANGA APARTMENT OPP. SHITEL GEST HOUSE ,Bharuch,Bharuch,Gujarat-392001",
        locality: "Ganga Apartment",
        parentId: 308445,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: "Free delivery",
          shortDescriptionList: [
            {
              meta: "Free delivery",
              discountType: "FREE_DELIVERY",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "Free delivery",
              discountType: "FREE_DELIVERY",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        aggregatedDiscountInfoV2: {
          header: "",
          shortDescriptionList: [
            {
              meta: "Free Delivery",
              discountType: "FREE_DELIVERY",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "Free delivery",
              discountType: "FREE_DELIVERY",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        chain: [],
        feeDetails: {
          fees: [],
          totalFees: 0,
          message: "",
          title: "",
          amount: "",
          icon: "",
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID: "",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: "1.3 kms",
        hasSurge: false,
        sla: {
          restaurantId: "680858",
          deliveryTime: 36,
          minDeliveryTime: 36,
          maxDeliveryTime: 36,
          lastMileTravel: 1.399999976158142,
          lastMileDistance: 0,
          serviceability: "SERVICEABLE",
          rainMode: "NONE",
          longDistance: "NOT_LONG_DISTANCE",
          preferentialService: false,
          iconType: "EMPTY",
        },
        promoted: false,
        avgRating: "--",
        totalRatings: 0,
        new: false,
      },
      subtype: "basic",
    },
    parentWidget: false,
  },
  {
    cardType: "restaurant",
    layoutAlignmentType: "VERTICAL",
    data: {
      type: "restaurant",
      data: {
        type: "F",
        id: "236906",
        name: "Hotel Krishna",
        uuid: "1bcf638f-8f7e-4bff-9d5f-b13d8dfd6359",
        city: "10140",
        area: "Unnati Nagar",
        totalRatingsString: "100+ ratings",
        cloudinaryImageId: "pijx8ppk417eqxam2sku",
        cuisines: ["Chinese", "North Indian", "Punjabi", "Gujarati"],
        tags: [],
        costForTwo: 15000,
        costForTwoString: "₹150 FOR TWO",
        deliveryTime: 34,
        minDeliveryTime: 34,
        maxDeliveryTime: 34,
        slaString: "34 MINS",
        lastMileTravel: 1.2999999523162842,
        slugs: {
          restaurant: "hotel-krishna-test-area_bharuch-test-area_bharuch",
          city: "bharuch",
        },
        cityState: "10140",
        address: "Orion Arcade, Harihar Complex,Zadeshwar Rd",
        locality: "Orion Arcade",
        parentId: 99843,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: "60% off",
          shortDescriptionList: [
            {
              meta: "60% off | Use WELCOMEBACK",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "60% off up to ₹100 | Use code WELCOMEBACK",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        aggregatedDiscountInfoV2: {
          header: "60% OFF",
          shortDescriptionList: [
            {
              meta: "Use WELCOMEBACK",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "60% off up to ₹100 | Use code WELCOMEBACK",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        chain: [],
        feeDetails: {
          fees: [],
          totalFees: 0,
          message: "",
          title: "",
          amount: "",
          icon: "",
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID: "",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: "1.2 kms",
        hasSurge: false,
        sla: {
          restaurantId: "236906",
          deliveryTime: 34,
          minDeliveryTime: 34,
          maxDeliveryTime: 34,
          lastMileTravel: 1.2999999523162842,
          lastMileDistance: 0,
          serviceability: "SERVICEABLE",
          rainMode: "NONE",
          longDistance: "NOT_LONG_DISTANCE",
          preferentialService: false,
          iconType: "EMPTY",
        },
        promoted: false,
        avgRating: "2.6",
        totalRatings: 100,
        new: false,
      },
      subtype: "basic",
    },
    parentWidget: false,
  },
  {
    cardType: "restaurant",
    layoutAlignmentType: "VERTICAL",
    data: {
      type: "restaurant",
      data: {
        type: "F",
        id: "647330",
        name: "MP Food Zone",
        uuid: "b437dfe0-ba2b-4b45-9f5c-497114ad2d1d",
        city: "10140",
        area: "Old Town",
        totalRatingsString: "Too Few Ratings",
        cloudinaryImageId: "5f3e284aaa4cb59a5be4409dc9badce9",
        cuisines: ["Street Food", "Snacks"],
        tags: [],
        costForTwo: 20000,
        costForTwoString: "₹200 FOR TWO",
        deliveryTime: 34,
        minDeliveryTime: 34,
        maxDeliveryTime: 34,
        slaString: "34 MINS",
        lastMileTravel: 1.5,
        slugs: {
          restaurant: "mp-food-zone-old-town-old-town",
          city: "bharuch",
        },
        cityState: "10140",
        address:
          "SHOP.NO.1.RADHA KRISHNA SHOPPING CENTER,ZADESHWAR ROAD,ZADESHWAR,BHARUCH",
        locality: "Zadeshwar Road",
        parentId: 285280,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: "60% off",
          shortDescriptionList: [
            {
              meta: "60% off | Use WELCOMEBACK",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "60% off up to ₹100 | Use code WELCOMEBACK",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        aggregatedDiscountInfoV2: {
          header: "60% OFF",
          shortDescriptionList: [
            {
              meta: "Use WELCOMEBACK",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "60% off up to ₹100 | Use code WELCOMEBACK",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        chain: [],
        feeDetails: {
          fees: [],
          totalFees: 0,
          message: "",
          title: "",
          amount: "",
          icon: "",
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID: "",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: "1.5 kms",
        hasSurge: false,
        sla: {
          restaurantId: "647330",
          deliveryTime: 34,
          minDeliveryTime: 34,
          maxDeliveryTime: 34,
          lastMileTravel: 1.5,
          lastMileDistance: 0,
          serviceability: "SERVICEABLE",
          rainMode: "NONE",
          longDistance: "NOT_LONG_DISTANCE",
          preferentialService: false,
          iconType: "EMPTY",
        },
        promoted: false,
        avgRating: "--",
        totalRatings: 0,
        new: false,
      },
      subtype: "basic",
    },
    parentWidget: false,
  },
  {
    cardType: "restaurant",
    layoutAlignmentType: "VERTICAL",
    data: {
      type: "restaurant",
      data: {
        type: "F",
        id: "511507",
        name: "Welcome Egg Hub",
        uuid: "0ef593e9-caa3-4e3e-ab82-693268ac59b7",
        city: "10140",
        area: "Narayan Nagar",
        totalRatingsString: "Too Few Ratings",
        cloudinaryImageId: "tuyzmsdwdyvnefwhvyfp",
        cuisines: ["Snacks", "Indian"],
        tags: [],
        costForTwo: 20000,
        costForTwoString: "₹200 FOR TWO",
        deliveryTime: 36,
        minDeliveryTime: 36,
        maxDeliveryTime: 36,
        slaString: "36 MINS",
        lastMileTravel: 1.7000000476837158,
        slugs: {
          restaurant: "shaani-milan-egg-hub-old-town-old-town",
          city: "bharuch",
        },
        cityState: "10140",
        address:
          "VINAY COMPLEX , NEAR ABC CHOKDI COLLAGE ROAD , BHARUCH  CITY , BHARUCH ,BHARUCH , GUJARAT",
        locality: "Vinay Complex",
        parentId: 374440,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: "60% off",
          shortDescriptionList: [
            {
              meta: "60% off | Use WELCOMEBACK",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "60% off up to ₹100 | Use code WELCOMEBACK",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        aggregatedDiscountInfoV2: {
          header: "60% OFF",
          shortDescriptionList: [
            {
              meta: "Use WELCOMEBACK",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "60% off up to ₹100 | Use code WELCOMEBACK",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        chain: [],
        feeDetails: {
          fees: [],
          totalFees: 0,
          message: "",
          title: "",
          amount: "",
          icon: "",
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID: "",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: "1.7 kms",
        hasSurge: false,
        sla: {
          restaurantId: "511507",
          deliveryTime: 36,
          minDeliveryTime: 36,
          maxDeliveryTime: 36,
          lastMileTravel: 1.7000000476837158,
          lastMileDistance: 0,
          serviceability: "SERVICEABLE",
          rainMode: "NONE",
          longDistance: "NOT_LONG_DISTANCE",
          preferentialService: false,
          iconType: "EMPTY",
        },
        promoted: false,
        avgRating: "--",
        totalRatings: 0,
        new: false,
      },
      subtype: "basic",
    },
    parentWidget: false,
  },
];

const RestaurantCard = (props) => {
  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    cuisines,
    deliveryTime,
    costForTwo,
    avgRating,
  } = resData?.data?.data;

  return (
    <div className="res-card">
      <img
        className="food-logo"
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          cloudinaryImageId
        }
        alt="foodlogo"
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(",")}</h4>
      <h4>{avgRating} star</h4>
      <h4>{deliveryTime} MINS</h4>
      <h4>{costForTwo / 100} FOR TWO</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resCard.map((restaurant) => (
          <RestaurantCard key={restaurant.data.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
