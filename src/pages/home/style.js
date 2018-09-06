import styled from 'styled-components';

export const HomeWrapper = styled.div`
  width:960px;
  margin:35px auto 0 auto;
  overflow:hidden;
`;
export const HomeLeft = styled.div`
  float:left;
  margin-left:15px;
  width:625px;
  .banner-img{
    width:625px;
    height:270px;
    margin-bottom:35px;
  }
`;
export const HomeRight = styled.div`
  width:280px;
  float:right;
`;
export const TopicWrapper = styled.div`

`;
export const TopicItem = styled.div`
  display: inline-block;
  margin: 0 18px 18px 0;
  padding-right:10px;
  min-height: 32px;
  line-height:32px;
  background-color: #f7f7f7;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  vertical-align: top;
  overflow: hidden;
  .topic-pic{
    width:32px;
    height:32px;
    float:left;
    margin-right:10px;
  }
`;
export const NoteList = styled.ul`
  .list-item{
    position: relative;
    width: 100%;
    margin: 0 0 15px;
    padding: 15px 2px 20px 0;
    border-bottom: 1px solid #f0f0f0;
    word-wrap: break-word;
  }
  .wrap-img{
    position: absolute;
    top: 50%;
    margin-top: -60px;
    right: 0;
    width: 125px;
    height: 100px;
    img{
      width: 100%;
      height: 100%;
      border-radius: 4px;
      border: 1px solid #f0f0f0;
    }
  }
  .content{
    padding-right: 140px;
    .title{
      margin: -7px 0 4px;
      display: inherit;
      font-size: 18px;
      font-weight: 700;
      line-height: 1.5;
    }
    .desc{
      margin: 0 0 8px;
      font-size: 13px;
      line-height: 24px;
      color: #999;
    }
    .meta{
      padding-right: 0!important;
      font-size: 12px;
      font-weight: 400;
      line-height: 20px;
      a{
        margin-right: 10px;
        color: #b4b4b4;
      }
    }
  }
`;
export const RecommendList = styled.div`
  margin-top: -4px;
  padding-bottom: 4px;
  min-height: 228px;
  img{
    width: 100%;
    min-height: 50px;
    margin-bottom: 6px;
    border-radius: 4px;
  }
`;
export const Download = styled.a`
  margin-bottom: 30px;
  padding: 10px 22px;
  width: 100%;
  border: 1px solid #f0f0f0;
  border-radius: 6px;
  background-color: #fff;
`;