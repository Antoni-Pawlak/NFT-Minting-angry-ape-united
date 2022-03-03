export default function Mint() {
    return (
        <div id="mint">
            <img id="mint-gif" src="./images/ClaimApe.gif" alt="Claim Ape NFT" />
            <div id="claim-text-wrapper">
                <div id="payment-modal">
                    <div id="payment-header">
                        <div id="payment-header-text">
                            <h4>CLAIM YOUR APES</h4>
                            <p>Enter how many apes you would like to mint here</p>
                        </div>
                        <img id="payment-header-img" src="data:image/png;base64,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" alt="Angry Apes United Logo" />
                    </div>
                    <div id="payment-info">
                        <img id="price-img" src="./images/ClaimApe.gif" alt="Claim Ape NFT" />
                        <div id="payment-info-text">
                            <p>Price Per Ape</p>
                            <h5>0.075 ETH Each</h5>
                            <p>Public sale available 11.10.2021</p>
                        </div>
                    </div>
                    <div id="ape-number">
                        <div id="minus">
                            <svg width="16" height="2" viewBox="0 0 16 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15 0H1C0.734784 0 0.48043 0.105357 0.292893 0.292893C0.105357 0.48043 0 0.734784 0 1C0 1.26522 0.105357 1.51957 0.292893 1.70711C0.48043 1.89464 0.734784 2 1 2H15C15.2652 2 15.5196 1.89464 15.7071 1.70711C15.8946 1.51957 16 1.26522 16 1C16 0.734784 15.8946 0.48043 15.7071 0.292893C15.5196 0.105357 15.2652 0 15 0Z" fill="white">
                                </path>
                            </svg>
                        </div>
                        <h5>0</h5>
                        <div id="plus">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15 7H9V1C9 0.734784 8.89464 0.48043 8.70711 0.292893C8.51957 0.105357 8.26522 0 8 0C7.73478 0 7.48043 0.105357 7.29289 0.292893C7.10536 0.48043 7 0.734784 7 1V7H1C0.734784 7 0.48043 7.10536 0.292893 7.29289C0.105357 7.48043 0 7.73478 0 8C0 8.26522 0.105357 8.51957 0.292893 8.70711C0.48043 8.89464 0.734784 9 1 9H7V15C7 15.2652 7.10536 15.5196 7.29289 15.7071C7.48043 15.8946 7.73478 16 8 16C8.26522 16 8.51957 15.8946 8.70711 15.7071C8.89464 15.5196 9 15.2652 9 15V9H15C15.2652 9 15.5196 8.89464 15.7071 8.70711C15.8946 8.51957 16 8.26522 16 8C16 7.73478 15.8946 7.48043 15.7071 7.29289C15.5196 7.10536 15.2652 7 15 7Z" fill="white">
                                </path>
                            </svg>
                        </div>
                        <h5 id="ape-max">20 Max</h5>
                    </div>
                    <div id="ape-total">
                        <p>Total</p>
                        <h5>0 ETH</h5>
                    </div>
                </div>
                <div id="purchase-button-wrapper">
                    <a href="https://opensea.io/collection/angryapesunited" rel="noreferrer" target="_blank">SOLD OUT</a>
                </div>
            </div>
        </div>
    )
}