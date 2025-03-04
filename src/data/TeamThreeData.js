import teamImage1 from "@/assets/images/team/1.png";
import teamImage2 from "@/assets/images/team/2.png";
import teamImage3 from "@/assets/images/team/3.png";
import teamImage4 from "@/assets/images/team/4.png";


const teamData = [
  {
      name: 'Mueez Asif',
      designation: 'President',
      image: teamImage4,
      subMembers: [
          {
              name: 'Mueez Asif',
              designation: 'President',
              image: teamImage4,
              subMembers: [
                  {
                      name: 'M Muzammil Hussain',
                      designation: "Digital Marketing & Operations",
                      image: teamImage1,
                  },
                  {
                      name: "Jawad Ahmad",
                      designation: "Data Scientist & AI Developer",
                      image: teamImage3,
                  },
                  {
                      name: "Usama Hanif",
                      designation: "Web & Mobile App Developer",
                      image: teamImage2,
                  },
              ],
          },
      ],
  },
  // Add more top-level members here
];

// export default teamData;