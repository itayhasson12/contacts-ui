import HierarchyIcon from '../assets/icons/hierarchyIcon.svg';
import GoalUserImage from '../assets/icons/goal-user-image.svg';
import { useQuery } from '@tanstack/react-query';
import { getPicByID } from '../services/userService';

export const ProfileImage = ({
  type,
  id,
  style = {},
  onClick = () => ({}),
}: {
  id: string;
  style?: object;
  type: 'group' | 'goalUser' | 'entity';
  onClick?: () => void;
}) => {
  const { data: pic } = useQuery({
    queryKey: ['getPic', id],
    queryFn: () => getPicByID({ id }),
    initialData: 'src/assets/icons/profileExample.svg',
    enabled: !!id,
  });

  if (type === 'group') return <img src={HierarchyIcon} style={style} />;
  if (type === 'goalUser') return <img src={GoalUserImage} style={style} />;

  return <img src={pic} style={style} onClick={onClick} />;
};
