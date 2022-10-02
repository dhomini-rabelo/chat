import { Div } from "./styles";
import logoSvg from '../../assets/images/logo.svg';
import { Link } from "react-router-dom";


export function Chats() {
    return (
        <Div.container className="pt-5 mx-auto">
            <div className="flex items-center justify-between">
                <img src={logoSvg} alt="project-logo" className="h-12 w-20" />
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M15 9.75001C15 6.85051 12.6495 4.5 9.75001 4.5C6.85051 4.5 4.5 6.85051 4.5 9.75001C4.5 12.6495 6.85051 15 9.75001 15C12.6495 15 15 12.6495 15 9.75001ZM9.75001 3C13.478 3 16.5 6.02208 16.5 9.75001C16.5 11.4324 15.8845 12.9711 14.8664 14.1531L20.7641 19.7039C21.0656 19.9877 21.08 20.4624 20.7962 20.7641C20.5123 21.0656 20.0376 21.08 19.736 20.7962L13.7651 15.1766C12.643 16.0082 11.254 16.5 9.75001 16.5C6.02208 16.5 3 13.478 3 9.75001C3 6.02208 6.02208 3 9.75001 3Z" fill="#243443" /></svg>
            </div>
            <div className="pt-6">
                <Div.chat className="flex items-center justify-between py-3">
                    <div className="rounded-full h-12 w-12 bg-pBlue-300"></div>
                    <div className="flex flex-col items-start grow ml-3 mr-3">
                        <strong className="text-pBlack-700 leading-5">AX-456</strong>
                        <span className="text-pBlack-300 text-sm text-max">Brb, watch some Dark here</span>
                    </div>
                    <div className="flex flex-col items-end">
                        <span className="text-pBlack-300 text-xs mr-4">2min ago</span>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M9.70707 5.29289L15.7071 11.2929C16.0976 11.6834 16.0976 12.3166 15.7071 12.7071L9.70707 18.7071C9.31657 19.0976 8.68338 19.0976 8.29287 18.7071C7.90237 18.3166 7.90237 17.6834 8.29287 17.2929L13.5858 12L8.29287 6.70711C7.90237 6.31658 7.90237 5.68342 8.29287 5.29289C8.68338 4.90237 9.31657 4.90237 9.70707 5.29289Z" fill="#243443" /></svg>
                    </div>
                </Div.chat>
                <Div.chat className="flex items-center justify-between py-3">
                    <div className="rounded-full h-12 w-12 bg-pBlue-300"></div>
                    <div className="flex flex-col items-start grow ml-3 mr-3">
                        <strong className="text-pBlack-700 leading-5">AX-456</strong>
                        <span className="text-pBlack-300 text-sm text-max">Brb, watch some Dark here</span>
                    </div>
                    <div className="flex flex-col items-end">
                        <span className="text-pBlack-300 text-xs mr-4">2min ago</span>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M9.70707 5.29289L15.7071 11.2929C16.0976 11.6834 16.0976 12.3166 15.7071 12.7071L9.70707 18.7071C9.31657 19.0976 8.68338 19.0976 8.29287 18.7071C7.90237 18.3166 7.90237 17.6834 8.29287 17.2929L13.5858 12L8.29287 6.70711C7.90237 6.31658 7.90237 5.68342 8.29287 5.29289C8.68338 4.90237 9.31657 4.90237 9.70707 5.29289Z" fill="#243443" /></svg>
                    </div>
                </Div.chat>
                <Div.chat className="flex items-center justify-between py-3">
                    <div className="rounded-full h-12 w-12 bg-pBlue-300"></div>
                    <div className="flex flex-col items-start grow ml-3 mr-3">
                        <strong className="text-pBlack-700 leading-5">AX-456</strong>
                        <span className="text-pBlack-300 text-sm text-max">Brb, watch some Dark here</span>
                    </div>
                    <div className="flex flex-col items-end">
                        <span className="text-pBlack-300 text-xs mr-4">2min ago</span>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M9.70707 5.29289L15.7071 11.2929C16.0976 11.6834 16.0976 12.3166 15.7071 12.7071L9.70707 18.7071C9.31657 19.0976 8.68338 19.0976 8.29287 18.7071C7.90237 18.3166 7.90237 17.6834 8.29287 17.2929L13.5858 12L8.29287 6.70711C7.90237 6.31658 7.90237 5.68342 8.29287 5.29289C8.68338 4.90237 9.31657 4.90237 9.70707 5.29289Z" fill="#243443" /></svg>
                    </div>
                </Div.chat>
                <Div.chat className="flex items-center justify-between py-3">
                    <div className="rounded-full h-12 w-12 bg-pBlue-300"></div>
                    <div className="flex flex-col items-start grow ml-3 mr-3">
                        <strong className="text-pBlack-700 leading-5">AX-456</strong>
                        <span className="text-pBlack-300 text-sm text-max">Brb, watch some Dark here</span>
                    </div>
                    <div className="flex flex-col items-end">
                        <span className="text-pBlack-300 text-xs mr-4">2min ago</span>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M9.70707 5.29289L15.7071 11.2929C16.0976 11.6834 16.0976 12.3166 15.7071 12.7071L9.70707 18.7071C9.31657 19.0976 8.68338 19.0976 8.29287 18.7071C7.90237 18.3166 7.90237 17.6834 8.29287 17.2929L13.5858 12L8.29287 6.70711C7.90237 6.31658 7.90237 5.68342 8.29287 5.29289C8.68338 4.90237 9.31657 4.90237 9.70707 5.29289Z" fill="#243443" /></svg>
                    </div>
                </Div.chat>
                <Div.chat className="flex items-center justify-between py-3">
                    <div className="rounded-full h-12 w-12 bg-pBlue-300"></div>
                    <div className="flex flex-col items-start grow ml-3 mr-3">
                        <strong className="text-pBlack-700 leading-5">AX-456</strong>
                        <span className="text-pBlack-300 text-sm text-max">Brb, watch some Dark here</span>
                    </div>
                    <div className="flex flex-col items-end">
                        <span className="text-pBlack-300 text-xs mr-4">2min ago</span>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M9.70707 5.29289L15.7071 11.2929C16.0976 11.6834 16.0976 12.3166 15.7071 12.7071L9.70707 18.7071C9.31657 19.0976 8.68338 19.0976 8.29287 18.7071C7.90237 18.3166 7.90237 17.6834 8.29287 17.2929L13.5858 12L8.29287 6.70711C7.90237 6.31658 7.90237 5.68342 8.29287 5.29289C8.68338 4.90237 9.31657 4.90237 9.70707 5.29289Z" fill="#243443" /></svg>
                    </div>
                </Div.chat>
                <Div.chat className="flex items-center justify-between py-3">
                    <div className="rounded-full h-12 w-12 bg-pBlue-300"></div>
                    <div className="flex flex-col items-start grow ml-3 mr-3">
                        <strong className="text-pBlack-700 leading-5">AX-456</strong>
                        <span className="text-pBlack-300 text-sm text-max">Brb, watch some Dark here</span>
                    </div>
                    <div className="flex flex-col items-end">
                        <span className="text-pBlack-300 text-xs mr-4">2min ago</span>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M9.70707 5.29289L15.7071 11.2929C16.0976 11.6834 16.0976 12.3166 15.7071 12.7071L9.70707 18.7071C9.31657 19.0976 8.68338 19.0976 8.29287 18.7071C7.90237 18.3166 7.90237 17.6834 8.29287 17.2929L13.5858 12L8.29287 6.70711C7.90237 6.31658 7.90237 5.68342 8.29287 5.29289C8.68338 4.90237 9.31657 4.90237 9.70707 5.29289Z" fill="#243443" /></svg>
                    </div>
                </Div.chat>
                <Div.chat className="flex items-center justify-between py-3">
                    <div className="rounded-full h-12 w-12 bg-pBlue-300"></div>
                    <div className="flex flex-col items-start grow ml-3 mr-3">
                        <strong className="text-pBlack-700 leading-5">AX-456</strong>
                        <span className="text-pBlack-300 text-sm text-max">Brb, watch some Dark here</span>
                    </div>
                    <div className="flex flex-col items-end">
                        <span className="text-pBlack-300 text-xs mr-4">2min ago</span>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M9.70707 5.29289L15.7071 11.2929C16.0976 11.6834 16.0976 12.3166 15.7071 12.7071L9.70707 18.7071C9.31657 19.0976 8.68338 19.0976 8.29287 18.7071C7.90237 18.3166 7.90237 17.6834 8.29287 17.2929L13.5858 12L8.29287 6.70711C7.90237 6.31658 7.90237 5.68342 8.29287 5.29289C8.68338 4.90237 9.31657 4.90237 9.70707 5.29289Z" fill="#243443" /></svg>
                    </div>
                </Div.chat>
                <Div.chat className="flex items-center justify-between py-3">
                    <div className="rounded-full h-12 w-12 bg-pBlue-300"></div>
                    <div className="flex flex-col items-start grow ml-3 mr-3">
                        <strong className="text-pBlack-700 leading-5">AX-456</strong>
                        <span className="text-pBlack-300 text-sm text-max">Brb, watch some Dark here</span>
                    </div>
                    <div className="flex flex-col items-end">
                        <span className="text-pBlack-300 text-xs mr-4">2min ago</span>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M9.70707 5.29289L15.7071 11.2929C16.0976 11.6834 16.0976 12.3166 15.7071 12.7071L9.70707 18.7071C9.31657 19.0976 8.68338 19.0976 8.29287 18.7071C7.90237 18.3166 7.90237 17.6834 8.29287 17.2929L13.5858 12L8.29287 6.70711C7.90237 6.31658 7.90237 5.68342 8.29287 5.29289C8.68338 4.90237 9.31657 4.90237 9.70707 5.29289Z" fill="#243443" /></svg>
                    </div>
                </Div.chat>
            </div>
            
            <div className="chat-icon p-4 rounded-full bg-pBlue-300 text-white inline-block">
                <Link to="/acoes">
                    <svg width="24" height="24" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.33325 14.99C3.33238 13.677 3.59051 12.3767 4.09287 11.1637C4.59522 9.95056 5.33194 8.84848 6.26084 7.92052C7.18973 6.99256 8.29255 6.25694 9.50614 5.7558C10.7197 5.25465 12.0203 4.99782 13.3333 5.00001H26.6666C32.1883 5.00001 36.6666 9.49168 36.6666 14.99V35H13.3333C7.81159 35 3.33325 30.5083 3.33325 25.01V14.99ZM33.3333 31.6667V14.99C33.3288 13.2242 32.6247 11.5321 31.3752 10.2844C30.1256 9.03668 28.4324 8.33511 26.6666 8.33335H13.3333C12.458 8.33115 11.5909 8.50176 10.7817 8.83539C9.97257 9.16902 9.23722 9.6591 8.61786 10.2775C7.99849 10.896 7.5073 11.6306 7.17246 12.4393C6.83762 13.2479 6.66571 14.1148 6.66659 14.99V25.01C6.671 26.7758 7.37511 28.468 8.62468 29.7157C9.87426 30.9634 11.5674 31.6649 13.3333 31.6667H33.3333ZM23.3333 18.3333H26.6666V21.6667H23.3333V18.3333ZM13.3333 18.3333H16.6666V21.6667H13.3333V18.3333Z" fill="white" /><path d="M3.33325 14.99C3.33238 13.677 3.59051 12.3767 4.09287 11.1637C4.59522 9.95056 5.33194 8.84848 6.26084 7.92052C7.18973 6.99256 8.29255 6.25694 9.50614 5.7558C10.7197 5.25465 12.0203 4.99782 13.3333 5.00001H26.6666C32.1883 5.00001 36.6666 9.49168 36.6666 14.99V35H13.3333C7.81159 35 3.33325 30.5083 3.33325 25.01V14.99ZM33.3333 31.6667V14.99C33.3288 13.2242 32.6247 11.5321 31.3752 10.2844C30.1256 9.03668 28.4324 8.33511 26.6666 8.33335H13.3333C12.458 8.33115 11.5909 8.50176 10.7817 8.83539C9.97257 9.16902 9.23722 9.6591 8.61786 10.2775C7.99849 10.896 7.5073 11.6306 7.17246 12.4393C6.83762 13.2479 6.66571 14.1148 6.66659 14.99V25.01C6.671 26.7758 7.37511 28.468 8.62468 29.7157C9.87426 30.9634 11.5674 31.6649 13.3333 31.6667H33.3333ZM23.3333 18.3333H26.6666V21.6667H23.3333V18.3333ZM13.3333 18.3333H16.6666V21.6667H13.3333V18.3333Z" fill="url(#paint0_linear_254_4424)" /><defs><linearGradient id="paint0_linear_254_4424" x1="19.9999" y1="5" x2="19.9999" y2="35" gradientUnits="userSpaceOnUse"><stop stopColor="white" /><stop offset="1" stopColor="white" stopOpacity="0" /></linearGradient></defs></svg>
                </Link>
            </div>

        </Div.container>
    )
}