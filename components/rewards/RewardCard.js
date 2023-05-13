import React from "react";

const RewardCard = ({ reward }) => {
  const { imagePath, rewardName, coinsRequired, rewardDescription } = reward;

  const handleBuy = () => {
    // Handle buy functionality here
    console.log(`Buying ${rewardName}`);
  };

  return (
    <div className="reward-card">
      <img src={imagePath} alt={rewardName} className="reward-image" />
      <div className="reward-details">
        <h2 className="reward-name">{rewardName}</h2>
        <p className="reward-coins">Coins Required: {coinsRequired}</p>
        <p className="reward-description">{rewardDescription}</p>
        <button className="buy-button" onClick={handleBuy}>
          Buy
        </button>
      </div>
    </div>
  );
};

export default RewardCard;
