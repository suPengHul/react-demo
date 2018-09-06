import React,{ Component } from 'react';
import { connect } from 'react-redux';
import {
  HomeWrapper,
  HomeLeft,
  HomeRight
} from './style';
import { actionCreators } from './store';
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
const test = (a)=>console.log(a)
class Home extends Component {
  render(){
    return (
      <HomeWrapper>
        <HomeLeft>
          <img src="//upload.jianshu.io/admin_banners/web_images/4427/59bf298e860d8e75c34e0a7e2c01c16859a29178.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" className="banner-img" alt=""/>
          <Topic />
          <List />
        </HomeLeft>
        <HomeRight>
          <Recommend />
          <Writer />
        </HomeRight>
      </HomeWrapper>
    )
  }
  componentDidMount (){
    this.props.changeHomeData();
    test(1)
  }
}
const mapDispatch = (dispatch) =>({
  changeHomeData (){
    const action = actionCreators.getHomeInfo();
    dispatch(action);
  },
})
export default connect(null,mapDispatch)(Home);