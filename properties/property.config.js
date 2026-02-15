export const propertyConfig = {
  branding: {
    logo: "FourHaus.png"
  },

  map: {
    center: [-33.8768, 151.2054],
    zoom: 17
  },

  generalInfo: {
    address: "Unit 325, 569 George St Sydney",
    checkIn: "3:00 PM",
    checkOut: "10:00 AM",
    wifiName: "FourHaus_5G",
    wifiPass: "Stay@Fourhaus!"
  },

  topics: [
    {
      title: "Lockbox",
      type: "map",
      markers: [
        {
          id: "sunTower",
          lat: -33.87729,
          lng: 151.20581,
          title: "Sun Tower Entrance",
          image: "Sun Tower.png"
        },
        {
          id: "lockbox",
          lat: -33.87703,
          lng: 151.20497,
          title: "Lockbox – Eagar Street",
          image: "eagar.gif",
          icon: "lockbox.png"
        }
      ],
      routes: [
        {
          id: "route1",
          coords: [
            [-33.87729,151.20581],
            [-33.87703,151.20497]
          ],
          color: "#2563eb"
        }
      ],
      steps: [
        {
          title: "Approach Sun Tower",
          text: "Walk through mall.",
          focus: "sunTower"
        },
        {
          title: "Collect Keys",
          text: "Find lockbox labeled 4H.",
          focus: "lockbox",
          route: "route1"
        }
      ]
    },

    {
      title: "Building Entry",
      type: "content",
      steps: [
        {
          title: "Scan Card",
          text: "Scan key card on reader.",
          image: "cardReader.JPG"
        }
      ]
    }
  ]
};
