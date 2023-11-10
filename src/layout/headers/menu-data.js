const menu_data = [
  {
    id: 1,
    mega_menu: false,
    has_dropdown: false,
    title: "Home",
    link: "/",
    active: "active",
    sub_menus: [
      // { link: "/", title: "Data analytics" },
      // { link: "/home", title: "Payment Gateway" },
      // { link: "/home-3", title: "CRM Software" },
      // { link: "/home-4", title: "Security Software" },
      // { link: "/home-5", title: "Saas" },
    ],
  },
  {
    id: 2,
    mega_menu: false,
    has_dropdown: false,
    title: "Pricing",
    link: "/price",
    active: "",
    sub_menus: [
      // { link: "/about", title: "About" },
      // { link: "/service", title: "Service" },
      // { link: "/service-details", title: "Service Details" },
      // { link: "/team", title: "Team" },
      // { link: "/team-details", title: "Team Details" },
      // { link: "/career", title: "Career" },
      // { link: "/career-details", title: "Career Details" },
      // { link: "/integrations", title: "Integrations" },
      // { link: "/price", title: "Price" },
      // { link: "/register", title: "Register" },
      // { link: "/sign-in", title: "Signin" },
      // { link: "/404", title: "404" },
    ],
  },
  
  {
    id: 3,
    mega_menu: false,
    has_dropdown: true,
    title: "Resource",
    link: "/",
    active: "",
    sub_menus: [
      { link: "/", title: "Developer" },
      { link: "/", title: "Help Guides" },
      { link: "/", title: "Partners" },
    ]
  },

  {
    id: 4,
    mega_menu: false,
    has_dropdown: false,
    title: "Blog",
    link: "/blog",
    active: "",
  },
  
  {
    id: 5,
    mega_menu: false,
    has_dropdown: false,
    title: "Contact",
    link: "/contact",
    active: "",
  },
  

];
export default menu_data;
