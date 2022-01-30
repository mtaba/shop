import Directory from "../../components/directory/directory.component.jsx";
import { HomepageContainer } from "./homepage.styles.jsx";

export default function Homepage(props) {
  return (
    <HomepageContainer>
      <Directory />
    </HomepageContainer>
  );
}
