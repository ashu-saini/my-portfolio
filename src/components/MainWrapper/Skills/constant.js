import UiImg from '../../../assets/designer.png'
import BackendImg from '../../../assets/web-development.png'
import ToolsImg from '../../../assets/technical-support.png'
import ReactImg from 'assets/svg/react.svg'
import AngularImg from 'assets/svg/angular.svg'
import JavascriptImg from 'assets/svg/javascript.svg'
import TypescriptImg from 'assets/svg/typescript.svg'
import WebpackImg from 'assets/svg/webpack.svg'
import HtmlImg from 'assets/svg/html5.svg'
import NodeImg from 'assets/svg/nodejs.svg'
import SQLImg from 'assets/svg/mysql.svg' 
import MongoDbImg from 'assets/svg/mongodb.svg'
import AwsImg from 'assets/svg/aws.svg'
import DockerImg from 'assets/svg/docker.svg'
import ChatImg from 'assets/svg/chat.svg'
import WebrtcImg from 'assets/svg/webrtc.svg'
import SdkImg from 'assets/svg/sdkImg.svg'
import ExpressImg from 'assets/svg/expressImg.png'
import MysqlImg from 'assets/svg/sql.svg'

export const skills = [
    {   icon: UiImg,
        title: 'Frontend',
        key: [
            {languague:'React/Redux/React Hooks/Context API', image:ReactImg}, 
            {languague:'Angular', image:AngularImg}, 
            {languague:'Javascript', image:JavascriptImg}, 
            {languague:'Typescript', image:TypescriptImg}, 
            {languague:'Webpack', image:WebpackImg}, 
            {languague:'HTML/CSS/SASS', image:HtmlImg}]

    },
    {   icon: BackendImg,
        title: 'Backend',
        key: [
            {languague:'Node.js', image:NodeImg}, 
            {languague:'Express', image:ExpressImg},
            {languague:'PostgresSQL', image:SQLImg}, 
            {languague:'MySQL', image:MysqlImg},
            {languague:'MongoDB', image:MongoDbImg}]
    },
    {   icon: ToolsImg,
        title: 'Tools',
        key: [
            {languague:'AWS', image:AwsImg}, 
            {languague:'Docker', image:DockerImg}, 
            {languague:'WebRTC', image:WebrtcImg}, 
            {languague:'RTC SDK', image:SdkImg}, 
            {languague: 'Chat SDK', image:ChatImg}]
    }
]

export const skillTitle = 'I have more than 8 years of experience building rich web applications for clients all over the world. Below is a quick overview of my main technical skill sets and tools I use.'