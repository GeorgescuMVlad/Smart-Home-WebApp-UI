import Header from "../../../../../Header";
import React, { useEffect, useState } from "react";
import "../products/Products.css"
import { Link } from "react-router-dom";
import Footer from "../../../../../Footer";


export default function FashionAssistantProducts() {

    return (
        
        <div className="products-box">

            <Header headerText="Fashion Assistant" backArrowEnabled={true} backArrowPath={"/masterbedroom/smartmirror"}/>

            <div className="product">

                <div>
                    <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8PDxAPDg8QFQ8QDw8PEA8PDxYVEBAPFRUWFhURFRcYHiggGBolGxUXITEhJSkrLi8uFyEzODMsNygtLi0BCgoKDg0OGxAQGy8mICY1LS0uLS0tLS8uLS8tLS0vMC0tLSstLS8vNS0tLi0vLS8tLS0tLS0tLS0tLS0tLS0tLf/AABEIAQoAvQMBEQACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAAAAQUGBwQDAgj/xAA/EAACAQMCAwYDBQcCBQUAAAABAgMABBESIQUxQQYTIlFhgQcycRQjQpGhUmKCkrHB8HLRFSQzQ6Jzk7LS4f/EABoBAQADAQEBAAAAAAAAAAAAAAACAwQFAQb/xAA0EQACAgEDAgMHBAICAgMAAAAAAQIRAxIhMQRBUWFxEyKBkaGx8DLB0eEF8TNCI7IUNGL/2gAMAwEAAhEDEQA/ANOoAoBUA6AKAKAKAKAKAKAKAKAVAOgCgCgCgCgFQDoAoAoAoAoAoAoBUA6AVAOgFQDoAoBUA6AVAOgFQBQDoBUAUAUAUA6AKAVAFAOgCgFQBQBQDoAoAoAoAoAoAoAoBUA6AVAFAFAFAOgFQBQBQDoAoAoBUA6AVAOgCgCgFQDoAoAoAoAoAoAoAoBUA6AKAKAVAOgCgCgCgFQDoBUA6AVAFAOgCgCgCgFQDoBUAUAUAUAUA6AKAKAVAFAOgCgCgCgFQDoAoBUA6AKAKAVAFAOgFQBQBQDoBUA6AVAOgFQBQDoBUAUA6AKAKAKAKAKA8rq4SKN5ZGwkas7t5KBkmgMkm7bcWnnZ7cMtuxykaW4kKJyBY4O+Qd6jZKhS9oOPncPcDBztYDBH/t8qHtIs3w64lxW6mna+LiCOMKgeARlpWbIx4QThVb8xSzxovWaknZEdAFAFAFAKgHQCoB0AqAdAFAFAFAFAFAFAFAInG5oCI4z2jt7VcvIhY4xHq+8OeRCfMR7VXLJTSSbJxhfcpF/29juJ44WQizfMc7PsWDZAIAPhUZHPfbpWbqsU5xcot2uF6F2JqLpoiI+Mvwm6WHulLQMVaXWQbi1bJRSPlHPOR1X0OZ4Je0j7RPnt4PuRmq901rhF/FeRJNCwMbjJzzTHMN5EHbFXUVnReMFAK6s40oudsn8WP2t6z9TLQrj+p7L+SeNXs+Dwk4c6p91KY3GCc+JCds5B5Z9KniweySpvb5CeTXyjnk4hJAB9riIDPoEluGkTfkzADUo9cYq7XvRDTtaJJWBAIIIO4I5EVMgOgCgCgCgCgFQBQDoAoBUA6AKAKAVAcfFuKQ2sYkmcKGdY1ycZduQ9BzJPQCoTk4xbSslGOp0QsvFJpsPDIhjCyFoYnV3Mg3jAccgd/fHSuNm6qU04ytfnpZux4YrchmANxEl1HEZbmKbupo4yjo4A1KwYknY7NtyO29VapODlBvZq03dltJSS2MtuI2R3jYeKNmjb/UpwR+YrvRkpJSXcwNU6J+9K31jHJJnvrLRHKwxqe2Y4U5Oxbyz1B86wxi8GZxXEt16l7qcLfK5PbsFxq5tp4YreMd3cTGFncHS+r5Qx5F12Ix0Lbb1ralbp71wUXHujZLfVJOzEEJGAqg7EueZI/wA6VRBPJnc3xHZevdk5VHGkuXydV5JiN8j8JHpvt/er809OOT8ivGrmkQjQKFjOliGUYIJ8KZwNI/Xy3riuKjGLyW773wvI2qW7rt9T7sGZQWCnSNWsjZCc5LknbVjmRz656a+n6jPS921+eJTlxQvmiQs7pJo0mibVHIiujeakZH0rqmM96AKAKAVAFAFAFAOgCgCgCgFQBQGPfE/jgmvO41fd2wKDyMpxrb22X+E14ycUT3YXs3BNbQzNFpkZDqkRpAWUnKEaGGPDiuNmlkyZnGLeleV0bIuMIp9/UlbjgNukq3BkmZo2ZULSl2GxU4MhJC7nbNZ5znBOCarjiuO9L9y2Ktp1vyU3tf2QmikaaE96s8jP4cZBck8wcEdM10sHUKEVDJtS2fKZTLE5u4/LwIaTspxBVU/Z3IcbiNg2/TIBqcetwSfJB4Jo9uyc8qX1nbSORFFfK5iJGlJQSrN9eY8udafcrX5c+RS7/SbjPxKKPm2fRBqP6bVTPq8MOZfLclHBkl2IHtD2hGgLCjuXONOnBY89OeSjbJY+2TWTqOqjkjpg9u7f5yaMeCUHqlz2Iq7ubuaNkgxGwiKo6kF43X5VKsCGQ8sjcfrXPjlprW20u3avgXyhXHf7la7WX1yLULLHNFskZkmkDST5JyW7vZMnbB26Vr6dQedOLvni9vnyUyv2bTJX4Tcc1K9i53TMsGf2CfGnsTn3PlXZRhkjRq9IhQBQCoAoB0AUAUAqAdAFAKgOPjXEFtbea4b/ALUbMAerclX3JA96A/PF8jTamYkuzFs/iZ2O/wBSSai3Stlq32Nl7KRyR2drFIumQQRqUJzpZVVSMA7jIxt5V87lcnJuDdNuufE3pLTvyiburbS/3nhGFkQ6codvFEw/azyPWrJ9OsX6ueVfD8U/M8jk1Lb0f8kN2hgAs5JD3gVUkyVYryGoqh59OYqGLG6g/F9+Pz6E3NW15HDwjg0cH2Z7RpWWUH7QzOzRSwmNjqYE6Q2rTjG+/lmmTO5qSnW3HinZXoSrSUaytljvYpreWIqOJiGKINmYKH2fT+x0B+ldhZJ+y3Xvab+NGVxjr8rNkefQi6ApIXJyMkny9P8A9rk48yxRi4pN9/G748jQ4am7ZWb+77u8CSyxKH71HjcadelhpkQ9GBIyOur0png252t0+38eZZGVKNPsVjtFxJrN2ZXAkyYkigBVY4ydRaTp3hHIdM5xjObenwrMltty2+78vI8yT0/n5uSVxxGHiFvci3VpWEMS9yy6TqYnqds7E5ycEVR7GeDLFzdeYU1KO25QuF3ktlcxy6SJYJAWQ7EgbMp+oyPeu/CanFSRinGnTP0Ha3CSxpLGcpIiuh81YZH9asKT1oBUA6AVAFAOgCgCgFQBQDoDPvi3xTTFFaKd5D30g/cXZAfq2T/BXjJRKJ2YjQ3UZkkjVUZDiRsaz0Vdt2yRzxyrJ1rfsJJJ7+BowfrRtvY6OVLcxz57yOWUFi2RIC2pXU/skMNunLpXvSaPZ+5x9ivNerc+uMNIX0tnuzsSGwBvtt1zjnXN695tTT/T2Rp6dRrbkj+0cJuIZwgwssbxIp2DSaCB79Paq8uZyye0X6E1+fnkSgqjpfO5TYrovwkG4EwMczW08kbMskajI7xgPmxlQQfWr3jUep9yt1a8H5fwFJuG5T+AQmPidqjYyl9CpI5ZWUDI9Nq66knHUYmt6Nxa2Ekg1AAN4tA2wm5Gr1OP1rkyxKfURtJXvX8+bNSnpxuvmVDtfZR3XexRyItwQXiycZQSKxx6ZVM48xWd5nHO8i3jf8onVwUe5y9s+JW6QXMMgQtJH90owZO+OCrEZyMDfPoB1GfOiwzlNSXb7HuaSUaKN2e4xLaswiiMneGEMoGSQuslAOpK6vyrq9VgjlrU6qyjHNx4R3cf4SGtnuoWDJFLqifUSz2shzobO+pGJG/T1rL02dxyezl359f7X1LckLjf5RdvhNxnvrZ7Vjlrc6kzzMLnl7Nn+YV1kYZIvlekRUA6AVAOgCgFQDoBUA6ABQGD9suKfa76aQHKa+7j8u7Twgj0OC38VeE0V+XcH1ajPTW/hVx9zHcwzSMzR920QY5Yg5XSDzO4H8wrPOUMEbS5fHiybUsjRpMqBlKncHYirpxUk4vgqTadorHEFcRSxStpjjc4l6rlSQw9t/qK4WWOWC9m94p7fnmdGDi3qXLRE8YZu5hFu0ZDSapo3AVroFDqQfvlctj0HIVTipN678n4bnru9jPbQQw30MXdkyxcTiPfmRiGtlcBYtHLPLxc9sV3cc3KCm+K4Mco1LT5mvd4unOpi7gs79Mkch9AcVxc0k6lFvVvb7b9vhwa1F3XbsVPtCttFOJn3liiuJYk5qqgLrbPVsEY/wBR9kVkleOKpNpP9iVpVJ9jKriZpWaVzmR2LMfMneu/GKikl2MDdu2aX2H4KsaS3CEkNHbHQ6ESxTASh15fvbHHX8+P1k5ZFx+l15O+PsacaUX6neLO37lwgXuZmllkZ23EkhBBAIHMty25AdayOU3LflUlXgi7SolE7LXj8L4kqynAjcwzHoYXx4/p8r+1fQ4ciyRUl3ME406N3q4pCgCgCgFQBQDoAoBUA6Ahe2PE/stjPIDhyvdR/wDqP4QR9Mk+1D1GDkeL6bUJnwo5ejUBZuwl0sXEIQ5OiVu6YhiMZII3HqAPes+eCkk32a/gsxyaujfkTAA8quWyopIztFCXt3UDmDj66TWLr3WNeqLsH6zL+G8KutE1hcN9+fst1A4k1FNLaSc+gUCsuXNjtZYLbdMvjGTTi/UgHiLcULhW7s8Q7sSYOjUH5auWcDOPKt2H/gUfL9imf/LfmbRbPG5AZfu4oVyMHxFtjjHnk/lXPw5ITab/AExjv6vn5l2SMktuW/sZn8YlXXbyR/IxmAxsPliwP0NaOlnGWbI48bfYhkvTFPzM9Tdduf8AeuiUG1fC2N34exkyzPkeI+InLEZJ+oxWT2SkskfzhFkpVp/O5C9oez/ile5muWgUqwtohuhx75HUY5Vgx5J43oUUpd2zVJKau7XgVbtfd2lyIp7dyZUURSrIMSOmPC/kxBznH7QrX0mPLik4zWz324M+RxkrRqPYPin2qwhZjl4x3EhPMsgABPqV0n3roIytUyw16eBQBQCoAoB0AUAqAKA+jw+G4RknjSSM/gdQRnz35H1rxnqKFx74VKSX4fLp5nuJySv0WTn/ADZ+tCVmd8W4NcWjlLmF436Bh4W9VYbMPUE0PTxsbhInEjqW0Asq6gBr6E7cqrywc46UycJKLs33szx2C7t4XjkUu0Slk1AyDGxJHPmDufI0hLUiuUaZIcVwYWz/AJ0rL16vA/gWYP8AkRQbHi1tI6/eW/2iUCKQo477GCcLjxEA79PPnXIlhywW6elb+RvuF7NFA4NdvJfwQszCB+JJIYc+BWaTTy+hxX0EIR0r0o58pPUzV2lZAw1HfbOBpf8Adr52UpJum979GdBRUqKR8UDm3tgc6u8kJBGCMqpx+tdD/Hxqcl5Iz9R2M7tVJOgAljjAUZJPkB1NdYzG49kL2CygtoLiYJNNbo+mTwYwMBdwN9/zzVCy6f1LZ3v4eF+pJwvgmeLSxYLCeMK4BI+YsV5FdO5O4GBzyPOsnV6ZbRkt6vv8di3Da5T2Kzw/szZ3Ib/liEWRTJ3iCJ2Vd8nQSQCc7ZBON6jic/arTLVFclmStO6psu8VtGkSCFFWNVAVUUKoXpgDlXUi01aMLXiKpERUA6AVAOgCgCgCgFQEjAuFH514en2BQHlfWcVxGYpo0dDzR1BB/P8ArQGZdovhXEZFa1mZImbxwyZfSvUo3M/RvPnXhKzu+HN9bMpYT6pFVI9LJpcnG7nO/iOo++Pw7ULJodT7vb4/wTcW1a+Jc+KOpibJHTBJ2Uk4B/WvOrinidjC2pqjNuItZ2d/CZoUVdRaO5h8ID5IIkUbFd85/wBs1zljyyhKMZXWzXl5GuUo7OqKvYRwLxGMhpPtC8Y+XA7ruVmJDZ56tQHpiunictEX2pfYySSto14ySLCSuhVzqBceIseQA/3Fc7C8+LDdJLnfn5GhqEp09/QzP4h8T+0RxHSCe/lV5CpVtcYVTpB2KnI3G3hFX9IpPJKc3u0jzNSioojOwNswu0k7p2Vu8gV0/BMy5BJzsMZ39a2ZMijt38ChRb9DVLvg1uw765hV+6Ru7SViyRg4JzvjnufSq8sWoaua+vyPYS3rxMmseLN/xFJ5iq6JWTGkCOEHUnhAwAFz08q8y49WFpd9/UnGfvqzV+zrTiEQy4eZwBJIgwhXcauW2R9PSufjm2pY8K5+iL8kaqU3wWKwbVGynmpKmt3RSfs9L5i6MuZe9fieZraUBQBQCoB0AUAUAUA41yQPM0BJmvD0RNAct/cFVwvzNlV/uaz9RlcI1HeT2RZihqdvhHFaxhQiM3kmSenRQT+VTxx9nBRkyM3rk2kUftrwiy4LDFc2UZFw0wiVZJZGjKFWZ9QDA4wvnzxU5QjJUz2MpWQ9v8V7rAWW1t28O+GkUHGB+Jm/rRxUlTQSp2jwk+I8bAl+FwMA3Lv2BJxzzpP9Kp/+NiXESftJ+Irr7Jw02vEDZiRrxFvLeH7Q8a2ZXSdGQD3u7A5IHLlvWgr5OlviVBIMPw8kg6sfbWxnngeDlVD6fHLlFiyTXDODiHbW1uHBl4TGxAwBJeSNgE48ICgL/ep48UMaqKojKUpcsmezHFYZ0xZyiydmy0EASWQJy1KXA5nGTg48uVY8kpY8+p/pNEVqx6VyaMtjoj7t5JJuau85Us+R10gDHoBW+k1TMd72Yn2y4E3DbsOigwO/ewZGVGlgTGw6429iKg4uqkWqXdGk8K4u81rBIhwsoDsEO4bGGQdcBgRXEyZJ4ovGnVP47m2KjP3mtyX4ddFHwc6ZCAdXPUeR/M/rVnRZtORpvmuebK80NUbXYk7hcN9a7aMLPOvTwKAVAOgCgCgCgPa0wCWPJQST5VGTSVs9St7HxHPKxLJgBj4UkO/tuMfSubDqM85OWNe6+L/bg0uGNbS58jivOONCH76IhlXIIyQR54AyevLOam+tlH3Zwp/QkumjLeMtjz4VftcqZXR1KkoodQvh2JYAE48tzkYNXdOpTftJtPwr6lWVqPuI9Zwjtpfkq6yfLoD5dDWX/I5N4w7csn06auS9Cv8AHLm1kkSKeDvMGOHDqNJlkiYoRnYkhTuOWaySlkktcG0kl38NrL9lsykca7HSEj7NbKiCRIu9Fy0veK5I1kEDRpK7gZ+b0rXg61f95W64qq/myuWK37pUuL2q280sSvrWKQrr82UANt08WR7V0MU3OCk1VlMo6XRpPaTs7Jd2Nhh0jNrZwxgEEhiypkk/h+X1rBL/ACKi6cfqWxwX3KSezkRzHHdK10DgRGMxq58kdjhj5YG9XR6p0pSjUfG7+aPHira9yDubd4tJcEZDYB54ViDny3U1qjOMuCpxa5JTs9bRHvJmmaGS3MbxyqurALFd16jJXf1rN1UpqoxVp3aLMWnlujZuC9oEuUVgfAVyXBwrsu2RnkN+XPO3SqH1rU0nFrx/b+Sb6f3W078Bds+Ci9s5IwmqZFLwbgHvANgCfPl710JwumuV9u6/O5lhKtil/Di8OJbCU6XjkZ01bEAnRIns3/yrldZhU5xmns9r+xqxSpNGi3FqO8XWxyYCpbPVcnPtip5sK9pFTf8A15813PIZPcdeJ1Ws5lhVz8w8Lf6hsT78/et/T5faQUijNDTJo+qvKgoBUA6AKAKAKA9wUWJtZxrBUbZJ26AbmqM8oKDUnzsW41JyVIjFctscgAElypwqjJ1f7VxMcXkkle0e/lybZVFevYrqXhurxY0kx3bTBo3BIYMuoaW5HQSMj1xttVyxzzO3348lff8AY8lNY1t2+pa4YgihVGANgK7UYqKUUc+UnJ2ygP21dbm6AgEsJuDBE0bjXlAqkaG+bxMPFsNxWDP07yTtSp+DVr829TVCemKVHbwmWS7SaRhGlxJOhijc5MZjjTZVOCzKx35eVZpdK9FQ3p79r5+5NZIp7nDZdnuJ2E8jxPHIkh7x4XLRqzEk5GQQDnrmvM2XFKKjki4td/yiUItbxaaM2414ppzp0gzztoznQC7HTnrjlmuthVY4ryRmn+pmv8LuwLBmVXk/5mWMavE2xIxgkeEYxj6Vxc8f/Hukt19jTDeVFbXiPFBFLrtEbTIr24kt1LKhckqNJHIY9amsfTbVKvHc9rJzRU+2t5JNLG01u0LmHxIRzJZyWHoTW7ooRjFqMr3KczbatH12J0G5SOVQySq8TK3Jttaj+ZRUustYtUeVv+37nmGnKmaDd8RhtULd0fulhllhhwxUHUiqF2GnUT+WcVx8blOoR7v9T70a20t/LhFysJi8SMwKsVBZSQSrY3Bx1rvdPk1407v+jm5I6ZNFE7VcHWLiUVxESjzjUG/7TSKQJEbrkoc7eWelZerjog7/AEv5r8f3NGB6mvFfUs1tKshBL51Hcg/McDJH1GK5M8kpS1Tuu/7mmqXukzw0g94AMK0jaR6KFH+1djpZp21w3t8EjJmXF+B6GtxmCgFQDoAoAoD4lkCqWPIDJqMpKKcnwj1Jt0j4W9LgsgUKp0E5zIR6D8IrldV1EtDnDh7X3fp4I1whFbPn6ETx/jiW8OZARHqTPQtqOMnz6nA6CqblkSw41S583/snp0++2Ps5batd2ykGcYhBGClsCSm3QuTrP1UdK6nS4PZY6fPcy5smuR2cev8A7Nazz9YonZf9eMKP5sVpKkZZ2B4HI8trO/8A0ftAC5bdnDJnb6ZOf3DWaeSLmsff8/PiaNL06i5wmCTirJje2mSaJR0dzIZWH10cuufSmDmXr9tjzIqS9C63VyusEZJKqV3GCNzyNZOrzY8eVN3ddqonig5R8jFO2vZ/TK0iOgS4lREQkh2kZiGIXGy7596t6TqNfuctd/sSz41Hc0bs8q26CzbDODdTOxxgEyjA0ncbt/4nevcSjNyVcbb+iX7EMlqvzxJ/iNuoiUhUG6gtp5Dryqvq8OOOLZJcb0e4ZycuWZr8QOz6XMsciypGEjCSO6kLp1MQd8dTjn1FUYepjhWiHveircv9jrWqToz2yJtZl8Ss0EkbZU+FsYOAfLG2a6O2bF4WjM1okXnhkUUkrXRllEcoW60I+EMoASRZMbthkTbl4vWuPm1QXs6Vrb4cqvU1wpvUvUnvh3x2S5e8jmPjWRZVX9lDlCg+hQfzV2unhGGNRiYcrbdsn+0/CTd2zRqcTKRLA/7My50+xyVPoxqyUVJU+CEZOLtEB2DSNEiTLaTqRVk+eJhqVoGO2cMWA5bYrjR/+3U14r12/dG2V+x2LBbcSjjcd44CLrCHnrZiOWOey8vWpdNljCehvZXXxPMsG42uXRIx3SyFtHTHpnI8uf5108WeGW9D4Ms8coVZ6VcVioAoB0AqA8rll2Vl1BjuP3QMk/0rP1OSMI+8rTLcUW3syLueGRGUSKAdvC+PGMfhLbEVw8vs4trHK0+F+zv7m2LbXvLc5+IcDF4VEjAwrLG7qQrbLvo3AI1DIzvsTWrocUtakt133+5XnklGiw12jCVT4jrLJaJbQqWe4mRSM4AjTxEk+WrQPevGSjydnZjgCQQQEanni1hC6+CN21BmX6An1351hSvI5Qu+PL+6NDfupS4KNJNIOLtPBGjC3uzb6nPiwQIz1GdnJ3rzHKMFpvndfMlJOW9Gq2ViXCyFhpAKkb5Ghjgb/TnTN0ryZVkvZfsQhmUYaaKL8QpVV7VH0mX7dbOqJ0QFQcem4FUdMpRzTk1wt6+yLZ04JLudtxxCOC+dZWAmmiaJQeXeBxLp9+8x/CatxSlHUmuXfoeTSlVdi4QgzWgAySBhd8E6Rgc/8/rWnqMXtcekoxy0SsqvabhzCwmaaMEBSxB5nA1Abeq5rlQw5MWltVv9/wAZt9pGTaXgZX2uESXemIeEwQHH8OBn10gVu6ByeN6vF/nzKOorVsWkR6rB2tAVLWoue/QjT3qECSMrjwsQMn1+mayTUVlWt3vVPz4Lben3SJ+F173PEY0J2mjeL+Yax/5IB712UYpcG2VIrK1fcA03EtzHI6q4DMgYBFkyCWG2ckgHbqTXP6zHK9cUqW999jX084/pfyOjuc6SBgvgO4A8Kjny3O/9a5MdE37z789vl4mq64RJQyKGVY1wmGBYjdm55/zzrr9Pmx6ljxLbx9DHlhKnKT3Out5mCgCgCgFQCZAcHkynKsOnQgjqCKhOGqn3RKMqOaWIosgCkqxDKVGWQ9VI549a5mfptMZJRu90+68vQ1Y8ik1b4+p7W+NOVJKkAgMNx6Vs6WCjC03T8exRmlcqZ6VqKhGJiwbJACnDKucHnkn2G1Vz1cp/T+yUaHGk2V1OoHiJxjxY0jYY25+dUyUrTtL9/wA9SxNb7GR2mHaaQLki8uLnu3YZaVWJAPLCMpQg9PPcVz5N3FN8pL4P8ZtjWl+W/wAjXOy1w0lhFI0bI7JITGxJIOpup3Of711EtOOl4GBu57mYdo7VRxm22bVHeWEUinfI8EkbAeWzj+CsnSascHGfr/X2L8rUt0Hba0Zr+6m0llie30qDuWUhmJwdS4G+dvflXntHq0x5bkexj7tvjYunYrtLBc5ijlVyVaTAUqwxgNlTuAcg55c62YdaitfJRkrV7vBKcctu8jYE+AqyMOhzsM/zfrWD/Ia9muFv9v5Luna4Z+fuLWDRuA6FJU+7lUnOsjIWZT1DaWB9V9a1YMildO1yvLyPMiqtvzxLD2CvUJEJdhrjaGWAAlJtsLKuPlcLsR151m66Eq1Vxun4eX8FmFp7WQ1jaTW19FHpYSxXKhcqQWAfKsB1Bx06Vux5FOKkiiUadH6ABzuOR3q1O1ZQJ1yOePpUMsNcXG6PYunZy2sRfUWTQrtsXAyqDy/ePpXMw9KpalppN8vwXhfd+Jrnkqt/9nuke+o42GlFHyonkPMnz9K6UMdPV8F5IzSnao9KtIBQBQDoAoAoAoAoAoDwmEvd69QjIJxqbwtHkHLA/KRn/OVZOoxyk04OmX4pRW0laOe1n1kzYzFHFIkbHq2zE46fL7cqi4aIJPek9/Oj1St7dzK+xt4jtEHGZvE+ChZtBYODnkAQVABxnSOYxjN1OFxTknt+fn5vpxZE9mjUuD3hjsoocESmKSRlLhigdnfTqz4iMgZ9RVs+oqKjHfa2/h+5RHFcrfiVfikEsnGLN3UB/tyKGG4eJYdYJ9QyS7fvU6aUnOSfNb+vH1VEssUoJrgge1lxKZ+IPAPF9rhQ5wQ4VY+h5bnG3lXka1py497/ANmSS/8AG/gSfZCZU4osCaSgXwkR6TqMTM+WGzNspORybblVnSNygm/kVZ0k2kX3iVzrDxpgjcMfUDJx9NNVdXmcouMN+z+V/QnghTUmZJ2qsGkSd+9WUQkPFICO8RT4ZInHlkagf3TVHR5VGaVVfPg/Br9y/LFuL8jk+Gko7+5jBVZ3tnWBjyEnP/6n+E1p69e7Fvi9zPi71yWK7UXF5bl7e4QxNG+iaM6iFB1qjb61yFOc8z61Rgg4txTTT8P49LLZSTV+BoXD7vvo9eMeJgQOQIPTzHrXXXBgZ016eCoAoAoB0AUAqAdAFAFAFAec8wRS7ch+Z9BUZOlZ7FW6PFmEsWX0iZsfOwOhOZ2HIdPPesMtFNuXvd9+P9GlXey2OTiccsUM4YxiMxDSqEhULkg4znoCdqm4SdubVfn3PNUdtK3Mt4PxYqkrnugWKRx6Y1V40fGl2JI8I2ABx8nPArNPAnNLelu/Ovz6l0clRb79jRPh3crKE1SiVkgWLWRk61+bDdRjfPkRWiGNLKnWzW3lwVTm3CvM55ITFxNpnP3a3s06ajsALUo5HkNR/Q1BZLzNx5S3+f8AB641jSfevsVfiNvoErDBla7lMjkYJicEBR6rlPX5gOdVY8jjl0T4r6+Px3JyhcNUT44fxu4M9uUcJAJj3ZClhMyqWKvuAoyG35gjfY1LD00Y7371fL8/cZcup1Wxo/ZpQ6SsfmaSQY16gARgY8tqtwY/1J82/qV5Z8NGff8ACZJJpQQQVa9Q5Pz2kisyflKDj61z1mjGKr/8/Nf0aqbd+vyZnXCLruLlZdOrQ4bQSRkjcDI+ldqcdcXHxMSdOy99leOT3l/Gt0Q6nOE0AKAWUsPppXr+zVMOmx42nH/ezJSyykmmayI8bj5eWOQDDOQBjYVdju34fllMqodWkAoAoBUAUA6AKAKAVAOgCgOLiEesxJnbvoywHPB1Afr/AEquVNpfEnHa2e/F1LXEI0hkXOQp8ZyORHkBvVWXDHI1qJwm4p0Q/GW7x8DYDwqOaquTjYnnud/6Vw+uzxbUYcI24INbvuZ7xHgKAXM1zL3cZcuWVi5A8eIwpHh8Tg43549a29P1LcFGCt7L+yvJj3t8Er8LbsfbhCuyMhdAeeY0xnbbJG/t710kntf5+cGZ8Ms9/Ift67HxfbAFYbAK2lmGnqe8X2rkvK8U8ko1z9/4o1aVKEUygcbt2aRo45tBN3HrnlPhIlR2VACANOVwB1OrrWjHkc8TyzV+S8vz5EGtMlFHPHwm4jilE0kfduneLDJKTGFDFtWOaEbEEDlqBqWPLjyfpTtd658vP4nkoyjzwXL4S8QDd7BqJEXy5zkxknQT6/MPata2nvy19v8AZTL9JIzRK00yaOeYpGzgiPxEEee7Y6fpXz+SLhka8G6+ZvjvBMxHiaGO5lDDBWaRWHQYYgivocTuCfkjDPlk12du/s93BLnAWRQxO4CN4WJHXwk1aRN1S8b5JABuNLj5W6H6GsrzSWXS+PHx8j1QTjaPatZSOgFQBQDoAoBUA6AKAKAKAhuJ3QhcynWo06W1DweE6o5FYZHPIIO+DWLLJxyavga8UFOGn4n3ayM8YlbV3ju0i6XOylj4Tk7fT0+lZp9XGGNLltfc99lc34EbPIVIyOoB3/z0/KuLNambYog+1SSPEtvDjMyyAqY1bMegggZG2SVAO1bv8a1Fym+y/gozq6RK9ljN/wAXdHDRx9xLKsYK6ZGyiFzp/wBXI8q6/SSjLGqd0ZcypnuIZhK0k+7a+IYIbI7uSdCgB9EUDHpXG6uac5JeP1V2asa2RGdpLYPaOCpYGSJsJ8xAdQwHn5/n6V5/j5uOVJd+SWaNx9CkcQUXF5DmNo1kd4ZH7zUXSNyjMMgacBTt9K7zSx43p7WzFbk9y39iwIuKPDFGI4UXSi90RLIGz42dxrKDHoN12qOGWuEZN7/ngJqrR99urDRcPLNeSwxM8TKI1JVZM+Fmx0yB6ZHrWPLccrSgm3v8PA0QqWO26RSPiJaIt8ZIyClxFHMGU5VjjSSPdc+9XdDJvFT7OirKveIaJsgeeNJ/pW4qNj4NxTXDbTXMIZZFUd8CSgIUodvwtqHLkc9K5uVKORzlG3+fXyNEFcajL4Fqhk1KGGcEA7jB9x0roxdxTMclTo+6keBQBQCoB0AUAqAKAKAdAJlBBBAIIwQRkEeRoDwNomkKvhAwBo2wB0ArFPoMM3dUXLPNEVecFkdgQ64BzpIIzvWN/wCMkk6aNMeriuUcl7w2cBcRaznxYbI0/iGCeo25VXj6HNjTVE/b45dzo7JxC3lPeQdzriKBny0sjBlOZHG2cA9Tz6Vt6eMozbnfy2+H4ijLTj7v33IRbW6hlmWf7yCWeZ4SrEmNS+eZXABDbDPQ9KxdaoyeqKarZ+BfgtKmyQ4haEwqucDxAEZDYyRnf6+tYMbnjlqSLXUtmQN1ZLbxQRIwWXdtYGoxSOpUkAg6yNRA9/ICurHPLJJyUXxVFCxJLkfD5JlvraWYTzTRSEk6cBYWUjQiAAajlTsOQOcbVZgeh1GNeXiyOWKrn4+BeePWS3kZQDCyLpdZVIwN/LrhjVufHPI46NvXtRVinGF6tzP+MfDad3jW3lTuVB/60hyhLEkLheXL3q/DCatzq/IjOcP+tkvwb4bWsQzdO0zk5wpMcYGOWAcn659quoqci22HDYLddMESIPJR/evFCKd1uHNtU2ddSIioAoAoB0AUAUAUAUAUAqAdAKgHQBQBQAaAVAOgFQBQDoAoBUA6AKAKAKAVAOgCgCgFQDoBUA6AKAKAVAOgFQDoAoBUA6AVAFAOgFQBQDoAoBUA6AKAKAKAVAOgFQDoAoBUA6AVAOgCgCgCgCgFQDoAoAoAoAoBUAUA6AVAOgCgCgFQDoBUA6AKAKAVAOgCgCgCgFQDoBUA6AVAFAFAOgCgCgCgCgCgCgFQDoBUA6AVAOgFQBQDoBUA6AKAVAFAFAFAFAOgCgCgCgCgCgCgCgFQDoAoBUA6AKAKAKAKAKAKAKAKAVAOgFQDoAoAoAoAoAoAoAoAoAoAoAoAoAoAoAoAoAoAoAoAoAoAoAoAoD//2Q==" alt=""/>

                    <Link to={`/masterbedroom/smartmirror/fashionhassistantproductdetails`}>
                        <button className="smarttub-buttons">Try</button>
                    </Link>
                   
                </div>

            </div>

            <div className="product">

                <div>
                    <img src="data:image/jpeg;base64,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" alt=""/>
                    <button className="smarttub-buttons">Try</button>
                </div>

            </div>

             <div className="product">

                <div>
                    <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0NDw0NDQ0NDQ0NDQ0NDQ0NDQ8NDQ0NFREWFhURFRUYHSghGBoxHRUVITIiJSkrLjEuFx8zODMsNyg5OisBCgoKDg0OGhAQGS0lHyUtLS0tKy0tLS0tLi8tLS0tMy0tLy0tLS0tLS0tLS0tKystLS0tLS0rLS0tLy0tKy0uLf/AABEIAQwAvAMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAABAgADBAYHCAX/xABLEAACAQMDAAYGAwkMCwAAAAAAAQIDBBEFEiEGBxMxYXEiMkFRgZFCkrEUFSMkUnKho8ElMzVic4KDsrTC0eFTY2RldHWEoqSz8P/EABcBAQEBAQAAAAAAAAAAAAAAAAABAgP/xAAbEQEBAAMAAwAAAAAAAAAAAAAAAQIRMRIhUf/aAAwDAQACEQMRAD8A2FIKREMgIgkDgABQQpAQKJgOAJgmDD1jU6NlQnc121ThhYik5zm3iMIr2t/4vhI17TOndvXq04SgqEaieO1qqNTLbUWsrZNNpriWc+zhkt0sm23YJgMXlZ9/vWA4KhcEwNg1mt0602nc1LWpOpB05Om7h01K27RPDjui3JYfGXHHD594bHgmBk08NNNNJpp5TXvTJgBMAaHwABBWO0ABA4CRAAgcEARDECgIkEgQIFIiQyAiQcBCkBpPWXSdWFrSfMOz1Ou176lKzk6f6X+k+FW0WjdUuj6a2q4t72xc1KUXG4iqjoy4/wBbKT8cm6dLqS/c+s/Up31OjW8Le4i6M385QNPs5yjp2ybxX0PVratUWeVBVuynnw3ub+AG89FNTd7Z0a01isk6NzF98bim9s8+bW7+cj6+Dn2m9KdOsdQ1KKuVKyupwuqdSlTqVKcLprFWPop5y+crK4SN40vU7a8h2trWhWgsJuD9KD90ovmL8GkB87pfq0rK0nOkt1zWlG2tYLvlcVOE15LMvNJe05xU6KU4072TlUqTs9Qs7OclLie6MadVrOee0lFrwN0uU7/W6NHvoaVS7eoscO5mk4rzzKk/6OSMXRNYto0dYqyqU9y1StdOnKTz2MKtJxlwuG9j2+PvFuosm62fo/RdOzsqcmnKnaW0JNPctypRTw/byZ2D5/Risqlnbyi04pVaUXH1XGnVnTTXhiCa8Gj6eAhMCtFmBQEaFZY0KwEIM0RIBSDYAAiQyIgoCBwEKQEwMkRIZICJBSGSGUQPl9JLF3Nnd0Y+vOjN0/f20PTpv60YnMOnFhVqwjq1B4tL+ha17iEZ7dtxLEJJxXrLdGPPPpNnZoLlPxOFToVaN7e2NSnUpRru5hSjUUvwdN9qqckvyNs5vhYfh3kt+LI1mLPqaLqlayrQuKEnGpBrK+jUhnmnNe2L/wA+9Hzp0KkOZ06kOE3vhKOPmgxlwaR1PolfSoafrGtVUu1rVq1SGXxJx/e4+Xa1XH4HNtN1GvbOTo1p03Ujsm4vma8c+3l896y+eTd7e/hPotcUcpTp11RxmKcm72lWyk3l8VPZnuOfqJNbHX+qq632lShiX4CruTw9uJ59GL7vo5x/Gz7TdHE07qhtZRsa1V91a7m4fmwhCOfrbl8Dd3EDHaFaL3ErcQKsCtFjQjQCYIM0AAAGAAqGQEMkBEhkiIZICJDxQEiyKAiRYokiiyKACico66bJ069jdx3R7SjUoSlFtYlTluXK9uKsvkdcjE07rdtqc9KqTnxKjcW9Sk8N+m5bGnjuW2cu/jKQHIrbWK9BxqToxby5qqlWtZSzy+aUoxl8YsTpFqqvriVyqFO2U4wj2dPlZisbm8LL+C4SXsKoXtSgoyqU21PbKNVOVGt3La1UXEuMP01Lh+JldI76zuJUJWdtK220Urjdt/CVva/R4ft9J4bzylgzJ741v10+n6wqenXti/WubqyqQ4+jBTlU584Ufmz5qKaa5LkbZd06soL70WWF3u7b8X911kbM4nwerWW/SLB+6NzH6t1VivsNjcSDGlErlEyZRKpIDGkhGi+SKpICpoA7QAADA2AYAVDICGQBSGQEOkAUh4oEUWRQDRRbFAih4oBkjXOsmooaTerClKrGjQpqWMdpUrQinzxlZb+HsNmSOWdb2pOvXt9MipuEFGtUUXtU7uafZUm8P0uz3tL2upEDnNjdxo1IU7mnKdGMlF1aGyVTZ3On6ScKkcZ9GSynjDWMM9IXZO5qfe9TVriGzfvzu2+lhTbko5/Kbff7DJ0nVPuWond0IXlKVNuDbWakPSjHenmNRJprE03FrjuPj1JbpSkoqClKUlCOdsE3lRWfYu4zj1q8CJbFiRGRtl3fqlrxqaTQinl0K13SmvdJ1pVUvq1Yv4m3tHIepfWuyuK2nzfoXUe2o+FxTj6SXnBN/wBGjsDRBRJFUkZEkVSQGNJFUkZE0UyQFMkKWNC4AGBcDsUBEMgIZAMh0CI8UA0UWwQkUWxQDxRZFCRLYoBoo4Xr1Gpf39/RVTfOvc1K1J03JR+5lKVFNJ4T2ujRec+rux7ju1Php+5p8d5556Q1atrPTrujUlSrVrGM4OLe+FKUcLOeOd9RcccNd64zl8jWLD1XXXcWtvZztaVKrbVak6teKSq1qjc925bViXpLdy8uEe7B8UHi8tvltvLb94TUmmbRiMKglH2eh906OpadUXGL22i/zJ1FCa+rKR6UaPLVg2q1Db6yrUnHHfu3rB6nq+tLzf2kFMkVTRdIqkBRNFEkZEymQFEkIWyKwILgdisBEMkLEsQDRLIiIsiAyLYlcSyIFkSyIkR4gWReOfdyeU5SUm5L6TcvPPJ6or57Opjv7Opjz2s8q0/Vj+avsLAQgCAUECCBm6HHdd2Ufyry0j8HWij1DUfLfizzF0aWb7T177+yX6+B6bbIEkVyHkVyAqkVSLZFUgKpCDyEAgrHFAriOhUOgHiOhEOgHiWxK4jxAtQ6K0OgLIrPHv4PKjg4+i++PovzXB6rpvleaPO1vpVO57Dc+znOU1NJU6cZKTUlNVEnuklKLcZd6UknDglymPVmNvGuEL7+27CtVo741OyqSp9pDOyeHjKz9hSa6goIAgfT6Lv90NN/5hY/2iB6XZ5s6IRzqWmL/eFj/aIHpFsgEmVyGbEkBXIrkWSK2BWxB2LgACscUCtDoRDoB0OhEMgLIlkSpFiAsQ6K0MmA7lhN+5N/I4PoVezvbd2u90K0LWNSq6vLqSpYy4PPftUUk+5J+zOe43tTbRrS/Jo1ZfKDZ5QXfH+aZyx8mscvFmw7l7OFwMBBOjIkIgkH2ehnaffLT+ygqk1eW8lBtJNKacnnwSb+B6NZwTqtpbtWtG1nYrifgn2FRJv5/Yd5bJQGxGwtiNgBlbGkIwFYoWKARWMxQK0MhEMgLExkIhkwLEx0VpjoCxMZMrTGTAxtcb+5L3HD+47rD8eykeWY98fNHp7pPPbYag37LC8f6mZ5ij6y80BmoIqCaDIgAkG8dT9up6k5vOaFpWqRwuNzcaeW/Kb+fgdqbOMdTdVrUa0c8TsavHvcatFr9GfmdlbII2K2RsVsANiMLYrYAYoWwATIMkABUhkVpjpgOh0VoZMCxMZMrTGTAtTGTKkxsgfL6ZTxpupP/YblfOm1+081L1l5novp7V2aVqMs4/FpR+tJRX9Y86fS+KAzIhFiMjQJEAIG59UssanHxtrhPyxF/sR2vJxLqof7qU/+HufntX+Z2rJKGyK2K2DJAWxcgbFbALYMgyDIBYAMAFSYyZWmMmBYmFMTIUwLExkysKYFqYUytMOQNe6yZ40i/wDGFCPzuaS/aefl6y8zvPWhUxpN0vy5W0f18Jf3TgsfWXmBmRCgRCUEICFG39Vn8KUf5G5/9TO1ZOGdW89uq2XLWXcxfjm2q8fPB3DcZobIGxckyAWxWwNgbAIMi5IAWxckYAKkMhUMgGQQIKAZBQEFAEJApAaj1qSxpVbxrWy8vwif7DhcfWXmdw62pNaXLH0rq2i/L0n9qRxCHrLzAy0ECCjQKIALA2Pq7WdVsfzq7/8AGqncjh/Vv/C1l/1X9kqnb8EomQZIBogmQAYGAWLkhEAGwbhmhMAIh0VodAOhkIhkwGQ6QqYyAOApBQUgNK63c/et84/G7bPisT4/+9xxCn6yO59bcktKnn6VzbRj+dmT+xM4ZS9YDKQQIJQSACUbT1Zxzqtp/FjdPz/Fqq/aduwcU6rlnVbbwp3T/UT/AMTtpKEwBjtCsgRoXA7QMAI0RIbBEgFwDA+CYAw0xkwbSYAbcMpFZAL1IdSMbIymBlxkOmYiqDxqgaj1xVdumRj/AKS9oR+Cp1Zf3UcSpesdn64Fv06nJNYp3tGTXvzTqx/acYo9/wAAMlBFCUEKFCUbd1WpvVbfC7qV034LsZLPza+Z21nFeqj+FKfjb3KX1U/sTO0slAYGHBMECgwPgm0CvAVEs2jKAFW0m0v2B2AfPcBXAydoriBjOINpkOAu0CnaDBftJtAx2hJPBlOmVVKXgBoHW1cfidvTz690p/CFKa/vo5XR7zq/WdptWvQt+xpTq1IXGNsIuTUJweW/DMY8+JoGqaJUsqdGVZxjUqyl6CecKKWefiij56IBE3L3r5gMQybTT7mv+8W9xW7v3qjUqf1UfesegOsVsYs50ov6VaUKWPg3n9AGT1VRzqtv4Urp/qZLj5o7e4Gv9Ceh1LS6eeKl1UilWrtf9kF9GP6X7fZjaVTIMXYTYZexAcAMdQDsLtpMAU7QqJZgmAF2k2jkAwWKwhwAmAYLEiNAVuIVEbBEBFEshFe4CQ8EBKljSqL0o/Lgwa/Rm1qcThKS8WuPLjg+tTMqIGt23QnSqfP3FRk/fVTq/wBZs+xa6db0eKNvRpfydGEPsRnZA2Ajz4gwMwNgLgJCAQASAK0TaMQCtoGCzArQCgwMED//2Q==" alt=""/>
                    <button className="smarttub-buttons">Try</button>
                </div>

            </div>
            <Footer/>
        </div>
    );

}