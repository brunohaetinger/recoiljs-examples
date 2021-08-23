import { useRecoilValue } from "recoil";
import { currentProfileQuery } from "../../recoil/asyncProfile/selectors";

export const CurrentProfile = () => {
  const { name, email, picture, location } =
    useRecoilValue(currentProfileQuery);
  return (
    <div className="flex-column">
      <img className="profile-picture" src={picture.large} alt="Profile" />
      <span>
        {name.title} {name.last}
      </span>
      <span>{email}</span>
      <span>{location.country}</span>
    </div>
  );
};
