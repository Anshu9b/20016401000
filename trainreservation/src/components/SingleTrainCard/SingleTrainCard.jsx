import './SingleTrainCard.css'
import trainIcon from '../../assets/train-light.svg'
import { useState } from 'react';


function SingleTrainCard({train}) {
    const [currentClickedTrain,setCurrentClickedTrain]= useState(null);
    return ( <>

    
        <div className="singleTrainCardWrapper" onClick={()=>{if(currentClickedTrain!=null)setCurrentClickedTrain(prev=>{return {isOpen : true, train : train} })}}>
            <div className="trainCardTop">
                <div className="trainName">
                    {(train && train.name)?train.name : ''}
                </div>
                <div className="trainNumber">
                  {(train && train.id)?train.id: ''}
                </div>

            </div>
            <div className="trainCardBottom">
                <div className="trainCardLeft">
                    {/* <div className="trainIcon">
                        <img src={trainIcon} alt="train" height={100}  width={100}/>
                    </div> */}
                    <div className="trainTimings">
                        <div className="trainDepartureTime">
                            <div className="trainDepartureName">
                                Departure at
                            </div>
                            <div className="trainDepartureDisplay">
                            {train.id} : { train.id}
                            </div>
                        </div>
                        <div className="trainDelay">
                            <div className="trainDelayName">
                                Delayed by
                            </div>
                            <div className="trainDelayDisplay">
                                 {(train && train.email)?train.email: ''} mins
                            </div>
                        </div>
                    </div>
                </div>
                <div className="trainCardRight">
                    <div className="seatsAvailable">
                        <div className="seatsAvailableName">
                            Seats Available
                        </div>
                        <div className="seatsOverAllDisplay">
                            <div className="sleeperCount">
                                <div className="sleeperCountName">
                                    Sleeper
                                </div>
                                <div className="sleeperCountDisplay">
                                    {(train && train.postId)?train.postId : ''}
                                </div>
                            </div>
                            <div className="acCount">
                                <div className="acCountName">
                                    AC
                                </div>
                                <div className="acCountDisplay">
                                {(train && train.postId )?train.postId : ''}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="price">

                        <div className="priceName">
                            Prices
                        </div>

                         <div className="overAllPrices">
                             <div className="sleeperPrice">
                                <div className="sleeperPriceName">
                                    Sleeper
                                </div>
                                <div className="sleeperPriceDisplay">
                                {(train && train.postId)?train.postId: ''}
                                </div>
                                                     </div>
                             
                                <div className="acPrice">
                                        <div className="acPriceName">
                                            AC
                                        </div>
                                        <div className="acPriceDisplay">
                                        {(train && train.postId)?train.postId : ''}
                                        </div>
                                </div>
                         </div>
                         
                    </div>
                </div>
            </div>
        </div>
    </> );
}


export default SingleTrainCard;



