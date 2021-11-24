import { Col, Row } from "antd";
import React from "react";
import { Card } from "antd";
import image1 from '../../assets/images/modern-design.jpg'
import image2 from '../../assets/images/easy-customise.jpg'
import image3 from '../../assets/images/clean-design.jpg'
import image4 from '../../assets/images/great-support.jpg'
import image5 from '../../assets/images/bg-hero.jpg'
import image6 from '../../assets/images/unlimited-features.jpg'
const { Meta } = Card;


const AppFeature = () => {
  return (
    <div id="feature" className="block featureBlock bgGray">
      <div className="container-fluid">
      <div className="titleHolder">
          <h2>Key Features and benefits</h2>
          <p>Contrary to popular belief, Lorem Ipsum is not simply</p>
        </div>
        <Row gutter={[16, 16]}>
          <Col xs={{span:24}} md={{span: 8}} sm={{span: 12}}>
            <Card
              hoverable
              cover={
                <img
                  alt="Modern Design"
                  src={image1}
                />
              }
            >
              <Meta title="Modern Design" />
            </Card>
          </Col>
          <Col xs={{span:24}} md={{span: 8}} sm={{span: 12}}>
            <Card
              hoverable
              cover={
                <img
                  alt="Easy Customize"
                  src={image2}
                />
              }
            >
              <Meta title="Easy Customize" />
            </Card>
          </Col>
          <Col xs={{span:24}} md={{span: 8}} sm={{span: 12}}>
            <Card
              hoverable
              cover={
                <img
                  alt="Clean Design"
                  src={image3}
                />
              }
            >
              <Meta title="Clean Design" />
            </Card>
          </Col>
          <Col xs={{span:24}} md={{span: 8}} sm={{span: 12}}>
            <Card
              hoverable
              cover={
                <img
                  alt="Great Support"
                  src={image4}
                />
              }
            >
              <Meta title="Great Support" />
            </Card>
          </Col>
          <Col xs={{span:24}} md={{span: 8}} sm={{span: 12}}>
            <Card
              hoverable
              cover={
                <img
                  alt="BG Hero"
                  src={image5}
                />
              }
            >
              <Meta title="BG Hero" />
            </Card>
          </Col>
          <Col xs={{span:24}} md={{span: 8}} sm={{span: 12}}>
            <Card
              hoverable
              cover={
                <img
                  alt="Unlimited Features"
                  src={image6}
                />
              }
            >
              <Meta title="Unlimited Features" />
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default AppFeature;
