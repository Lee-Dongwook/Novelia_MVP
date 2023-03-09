import React from 'react';
import MobileNavbar from '../../Navbar/MobileNavbar';
import MobileFooter from '../../Footer/MobileFooter';
import image1 from '../../Image/illumination-5173540_1920.jpg';

function MobileFavoritepage(){
    return(
        <div>
            <MobileNavbar />
            <div>
                <h4>선호태그 작품</h4>
                <table>
                    <tr>
                        <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#AA0140",borderRadius:"50px",color:"#FFFFFF"}}>전체작품</button></td>
                        <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#AA0140",borderRadius:"50px",color:"#FFFFFF"}}>객관식작</button></td>
                        <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#AA0140",borderRadius:"50px",color:"#FFFFFF"}}>주관식작</button></td>
                    </tr>
                    <tr>
                    <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#AA0140",borderRadius:"50px",color:"#FFFFFF"}}>판타지작</button></td>
                    <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#AA0140",borderRadius:"50px",color:"#FFFFFF"}}>로맨스작</button></td>
                    <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#AA0140",borderRadius:"50px",color:"#FFFFFF"}}>로판작품</button></td>
                    <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#AA0140",borderRadius:"50px",color:"#FFFFFF"}}>남성향작</button></td>
                    <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#AA0140",borderRadius:"50px",color:"#FFFFFF"}}>여성향작</button></td>
                    <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#AA0140",borderRadius:"50px",color:"#FFFFFF"}}>선호태그</button></td>
                    </tr>
                </table>
                <table>
                    <tr>
                        <td>
                        <img style={{width:"87px", height:"130px"}} src={image1} alt="이미지" />
                            <h4>아빠가 힘을 숨김</h4>
                            <h5>고은채</h5>
                        </td>
                        <td>
                        <img style={{width:"87px", height:"130px"}} src={image1} alt="이미지" />
                            <h4>변경백 서자는 황제였다</h4>
                            <h5>기준석</h5>
                        </td>
                        <td>
                        <img style={{width:"87px", height:"130px"}} src={image1} alt="이미지" />
                            <h4>결혼하지 않으면 죽습니다</h4>
                            <h5>찬연</h5>
                        </td>
                    </tr>
                    <tr>    
                    <td>
                    <img style={{width:"87px", height:"130px"}} src={image1} alt="이미지" />
                            <h4>무림세가 천대받는 손녀딸이 되었다</h4>
                            <h5>마루별</h5>
                        </td>
                        <td>
                        <img style={{width:"87px", height:"130px"}} src={image1} alt="이미지" />
                            <h4>전지적 독자시점</h4>
                            <h5>심숭</h5>
                        </td>
                        <td>
                        <img style={{width:"87px", height:"130px"}} src={image1} alt="이미지" />
                            <h4>진짜가 나타난 날</h4>
                            <h5>가엔</h5>
                        </td>
                    </tr>
                    <tr>
                    <td>
                    <img style={{width:"87px", height:"130px"}} src={image1} alt="이미지" />
                            <h4>화산귀환</h4>
                            <h5>비가</h5>
                        </td>
                        <td>
                        <img style={{width:"87px", height:"130px"}} src={image1} alt="이미지" />
                            <h4>이운</h4>
                            <h5>라희</h5>
                        </td>
                        <td>
                        <img style={{width:"87px", height:"130px"}} src={image1} alt="이미지" />
                            <h4>아빠가 힘을 숨김</h4>
                            <h5>고은채</h5>
                        </td>
                    </tr>
                </table>
            </div>
            <MobileFooter />
        </div>
    )
}

export default MobileFavoritepage;