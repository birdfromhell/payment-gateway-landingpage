const menu_data = [
  {
    id: 1,
    mega_menu: false,
    has_dropdown: false,
    title: "Home",
    link: "/",
    active: "active",
  },
  {
    id: 2,
    mega_menu: false,
    has_dropdown: false,
    title: "Pricing",
    link: "/price",
    active: "",
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
