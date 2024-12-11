import user from "../../Images/user.png";
import Test1 from "../../Images/Test1.png";
import Test2 from "../../Images/Test2.png";
import Test3 from "../../Images/Test3.png";
export const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
export const Testimonials = [
  {
    id: 1,
    url: user,
    name: "Joe Doe",
    role: "Software Engineer",
    content:
      "I was struggling to keep up with my coursework until I found this platform. The personalized tutoring and assignment help were game-changers, and the programming lessons sparked my interest in coding like never before. Highly recommended!",
  },
  {
    id: 2,
    url: Test1,
    name: "Daniel Mike",
    role: "Project Designer",
    content:
      "Balancing my studies and assignments felt overwhelming until I discovered this platform. The guidance and support I received were exceptional, and the step-by-step explanations made even the toughest concepts easy to grasp. A lifesaver for students!",
  },
  {
    id: 3,
    url: Test2,
    name: "Alice Yhun",
    role: "Student",
    content:
      "This website transformed how I approached my assignments and coding projects. The resources are top-notch, and the tutors are incredibly patient and knowledgeable. Thanks to their help, I feel more confident in my programming skills!",
  },
  {
    id: 4,
    url: Test3,
    name: "Bob Mike",
    role: "Student",
    content:
      "I was new to coding and didn’t know where to start, but this platform made the learning process enjoyable and straightforward. Their assignment help and expert advice have been invaluable. I couldn’t have asked for a better support system!",
  },
];
