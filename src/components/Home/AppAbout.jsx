import { Col, Row } from "antd";
import React from "react";

const AppAbout = () => {
  const items = [
    {
      key: "1",
      icon: <i className="fas fa-chart-pie"></i>,
      title: "High Performance",
      content:
        "cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.",
    },
    {
      key: "2",
      icon: <i className="fas fa-desktop"></i>,
      title: "Flat Design",
      content:
        "cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.",
    },
    {
      key: "3",
      icon: <i className="fas fa-database"></i>,
      title: "Simplified Workflow",
      content:
        "cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.",
    },
  ];
  return (
    <div id="about" className="block aboutBlock">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>About Us</h2>
          <p>Contrary to popular belief, Lorem Ipsum is not simply</p>
        </div>
        <div className="contentHolder">
          <p>
            If you are going to use a passage of Lorem Ipsum, you need to be
            sure there isn't anything embarrassing hidden in the middle of text.
            All the Lorem Ipsum generators on the Internet tend to repeat
            predefined chunks as necessary, making this the first true generator
            on the Internet. It uses a dictionary of over 200 Latin words,
            combined with a handful of model sentence structures, to generate
            Lorem Ipsum which looks reasonable.
          </p>
        </div>
        <Row gutter={[16, 16]}>
          {items.map((item) => (
            <Col md={{span: 8}} key={item.key}>
                <div className="content">
                    <div className="icon">
                        {item.icon}
                    </div>
                    <h3>{item.title}</h3>
                    <p>{item.content}</p>
                </div>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default AppAbout;
