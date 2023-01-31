import ThreeView from "./ThreeView";
import './styles/DetailsCard.css';

const DetailsCard: React.FC = () => {
  return (
    <article className='details-card__container'>
      <div className='details-card__left'>
        <ThreeView />
      </div>
      <div className='details-card__right'>
        Hello World
      </div>
    </article>
  );
}

export default DetailsCard;