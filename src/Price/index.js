import React, { Component } from "react";
import {
  Segment,
  Grid,
  Form,
  Responsive,
  Divider,
  Message,
  Header,
  Tab,
  Dropdown
} from "semantic-ui-react";
import axios from "axios";
import YAML from "yamljs";

import { Common } from "./Common";
import Trim from "./Trim";
import Color from "./Color";
import Wheal from "./Wheal";
import Interior from "./Interior";
import AutoPilot from "./AutoPilot";
import Cash from "./Cash";
import Loan from "./Loan";

import "./index.css";

export default class Price extends Component {
  state = {
    trims: [],
    options: { color: [], interior: [], wheal: [], autopilot: [] },
    saletex: {
      개별소비세: { 과세: 0, 감면: 0 },
      교육세: { 과세: 0, 감면: 0 },
      취득세: { 과세: 0, 감면: 0 }
    },
    subsidy_list: [],
    loadingA: true,
    loadingB: true,
    performance_index: -1,

    base_selected: 0,
    base_price: 0,
    color_selected: 0,
    color_price: 0,
    wheal_selected: 0,
    wheal_price: 0,
    interior_selected: 0,
    interior_price: 0,
    autopilot_price: 0,
    total_price: 0,
    gov_subsidy: 0,
    local_subsidy: 0,
    final_price: 0,
    prepay: 0,
    annual_loan_interest_rate: 3.5,
    installment_months: 60
  };

  onTrimChange = (i, v) => {
    this.setState({
      base_price: Common.usdTokrw(v["가격"]),
      base_selected: i,
      wheal_price: 0,
      wheal_selected:
        v["이름"] === "Performance"
          ? 2
          : this.state.wheal_selected === 2
          ? 0
          : this.state.wheal_selected
    });
  };

  onColorChange = (i, v) => {
    this.setState({
      color_price: Common.usdTokrw(v["가격"]),
      color_selected: i
    });
  };

  onWhealChange = (i, v) => {
    this.setState({
      wheal_price: Common.usdTokrw(v["가격"]),
      wheal_selected: i
    });
  };

  onInteriorChange = (i, v) => {
    this.setState({
      interior_price: Common.usdTokrw(v["가격"]),
      interior_selected: i
    });
  };

  onAutoPilotChange = (v, checked) => {
    this.setState({
      autopilot_price: checked ? Common.usdTokrw(v["가격"]) : 0
    });
  };

  usdTokrw = usd => (usd * 1134.72).toFixed(0);
  comma = x =>
    Number(x)
      .toFixed(0)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  calcTotalPrice = () =>
    this.setState(prev => {
      return {
        total_price:
          Number(prev.base_price) +
          Number(prev.color_price) +
          Number(prev.wheal_price) +
          Number(prev.interior_price) +
          Number(prev.autopilot_price)
      };
    });
  calcFuncs = () => {
    return {
      부가가치세_과세: () => this.state.total_price * 0.1,
      개별소비세_과세: () =>
        this.state.total_price * this.state.saletex.개별소비세.과세,
      개별소비세_감면: () =>
        Math.min(
          this.state.total_price * this.state.saletex.개별소비세.과세,
          this.state.saletex.개별소비세.감면
        ),
      교육세_과세: () =>
        this.state.total_price *
        this.state.saletex.개별소비세.과세 *
        this.state.saletex.교육세.과세,
      교육세_감면: () =>
        Math.min(
          this.state.total_price *
            this.state.saletex.개별소비세.과세 *
            this.state.saletex.교육세.과세,
          this.state.saletex.교육세.감면
        ),
      취득세_과세: () =>
        (this.state.total_price +
          (this.state.total_price * this.state.saletex.개별소비세.과세 -
            Math.min(
              this.state.total_price * this.state.saletex.개별소비세.과세,
              this.state.saletex.개별소비세.감면
            )) +
          (this.state.total_price *
            this.state.saletex.개별소비세.과세 *
            this.state.saletex.교육세.과세 -
            Math.min(
              this.state.total_price *
                this.state.saletex.개별소비세.과세 *
                this.state.saletex.교육세.과세,
              this.state.saletex.교육세.감면
            ))) *
        this.state.saletex.취득세.과세,
      취득세_감면: () =>
        Math.min(
          (this.state.total_price +
            (this.state.total_price * this.state.saletex.개별소비세.과세 -
              Math.min(
                this.state.total_price * this.state.saletex.개별소비세.과세,
                this.state.saletex.개별소비세.감면
              )) +
            (this.state.total_price *
              this.state.saletex.개별소비세.과세 *
              this.state.saletex.교육세.과세 -
              Math.min(
                this.state.total_price *
                  this.state.saletex.개별소비세.과세 *
                  this.state.saletex.교육세.과세,
                this.state.saletex.교육세.감면
              ))) *
            this.state.saletex.취득세.과세,
          this.state.saletex.취득세.감면
        ),
      전기차_보조금: () => this.state.gov_subsidy + this.state.local_subsidy,
      할부원금: () =>
        Math.max(
          this.state.total_price +
            this.state.total_price * 0.1 +
            this.state.total_price * this.state.saletex.개별소비세.과세 -
            Math.min(
              this.state.total_price * this.state.saletex.개별소비세.과세,
              this.state.saletex.개별소비세.감면
            ) +
            this.state.total_price *
              this.state.saletex.개별소비세.과세 *
              this.state.saletex.교육세.과세 -
            Math.min(
              this.state.total_price *
                this.state.saletex.개별소비세.과세 *
                this.state.saletex.교육세.과세,
              this.state.saletex.교육세.감면
            ),
          0
        ),
      최종가격: () =>
        Math.max(
          this.state.total_price +
            this.state.total_price * 0.1 +
            this.state.total_price * this.state.saletex.개별소비세.과세 -
            Math.min(
              this.state.total_price * this.state.saletex.개별소비세.과세,
              this.state.saletex.개별소비세.감면
            ) +
            this.state.total_price *
              this.state.saletex.개별소비세.과세 *
              this.state.saletex.교육세.과세 -
            Math.min(
              this.state.total_price *
                this.state.saletex.개별소비세.과세 *
                this.state.saletex.교육세.과세,
              this.state.saletex.교육세.감면
            ) -
            (this.state.gov_subsidy + this.state.local_subsidy),
          0
        ),
      원리금균등상환_월납입금: (대출원금, 연이자율, 할부개월) => {
        let 월이자율 = (연이자율 / 12) * 0.01;
        let x = Math.pow(1 + 월이자율, 할부개월);
        return (대출원금 * 월이자율 * x) / (x - 1);
      }
    };
  };
  // 부가가치세_과세 = () => this.state.total_price * 0.1;
  // 개별소비세_과세 = () =>
  //   this.state.total_price * this.state.saletex.개별소비세.과세;
  // 개별소비세_감면 = () =>
  //   Math.min(this.개별소비세_과세(), this.state.saletex.개별소비세.감면);
  // 교육세_과세 = () => this.개별소비세_과세() * this.state.saletex.교육세.과세;
  // 교육세_감면 = () =>
  //   Math.min(this.교육세_과세(), this.state.saletex.교육세.감면);
  // 취득세_과세 = () =>
  //   (this.state.total_price +
  //     (this.개별소비세_과세() - this.개별소비세_감면()) +
  //     (this.교육세_과세() - this.교육세_감면())) *
  //   this.state.saletex.취득세.과세;
  // 취득세_감면 = () =>
  //   Math.min(this.취득세_과세(), this.state.saletex.취득세.감면);
  // 전기차_보조금 = () => this.state.gov_subsidy + this.state.local_subsidy;
  // 할부원금 = () =>
  //   Math.max(
  //     this.state.total_price +
  //       this.부가가치세_과세() +
  //       this.개별소비세_과세() -
  //       this.개별소비세_감면() +
  //       this.교육세_과세() -
  //       this.교육세_감면(),
  //     0
  //   );
  // 최종가격 = () =>
  //   Math.max(
  //     this.state.total_price +
  //       this.부가가치세_과세() +
  //       this.개별소비세_과세() -
  //       this.개별소비세_감면() +
  //       this.교육세_과세() -
  //       this.교육세_감면() -
  //       this.전기차_보조금(),
  //     0
  //   );
  // 원리금균등상환_월납입금 = (대출원금, 연이자율, 할부개월) => {
  //   let 월이자율 = (연이자율 / 12) * 0.01;
  //   let x = Math.pow(1 + 월이자율, 할부개월);
  //   return (대출원금 * 월이자율 * x) / (x - 1);
  // };

  componentDidMount() {
    axios
      .get(
        "https://raw.githubusercontent.com/geeksbaek/tesla-model-3-korea/master/data/model_3.yaml"
      )
      .then(res => {
        let data = YAML.parse(res.data);
        this.setState({
          trims: data.trims,
          options: data.options,
          base_price: this.usdTokrw(data.trims[0]["가격"]),
          base_selected: 0,
          loadingA: false
        });
        data.trims.forEach((v, i) => {
          if (v["이름"] === "Performance") {
            this.setState({ performance_index: i });
          }
        });
        this.calcTotalPrice();
      });

    axios
      .get(
        "https://raw.githubusercontent.com/geeksbaek/tesla-model-3-korea/master/data/saletex.yaml"
      )
      .then(res => {
        let data = YAML.parse(res.data);
        this.setState({
          saletex: {
            개별소비세: {
              과세: data["개별소비세"]["과세"],
              감면: data["개별소비세"]["감면"]
            },
            교육세: {
              과세: data["교육세"]["과세"],
              감면: data["교육세"]["감면"]
            },
            취득세: {
              과세: data["취득세"]["과세"],
              감면: data["취득세"]["감면"]
            }
          },
          loadingB: false
        });
      });

    axios
      .get(
        "https://raw.githubusercontent.com/geeksbaek/tesla-model-3-korea/master/data/subsidy.json"
      )
      .then(res => {
        this.setState({
          gov_subsidy: res.data.gov,
          subsidy_list: res.data.local
        });
      });
  }

  render() {
    return (
      <Segment
        textAlign="left"
        className="SegmentGroup"
        loading={this.state.loadingA && this.state.loadingB}
      >
        <Message info>
          <Message.List>
            <Message.Header>먼저 읽어주세요</Message.Header>
            <Divider hidden fitted />
            <Divider hidden fitted />
            <Divider hidden fitted />
            <Divider hidden fitted />
            <Message.Item>
              여기에서 표기되는 모든 가격은 USD를 현재 시간 기준의 환율을
              적용하여 KRW으로 나타낸 것입니다.
            </Message.Item>
            <Message.Item>
              구입에 필요한 최소한의 옵션이 미리 선택되어 있습니다.
            </Message.Item>
            <Message.Item>
              거주지를 선택하면 해당 지자체에서 지급하는 승용 전기차 보조금과
              정부에서 지급하는 전기차 보조금이 최종 가격에 반영됩니다.
            </Message.Item>
            <Message.Item>
              계산된 가격과 실제 가격은 차이가 발생할 수 있으며 이로 인해
              발생하는 문제에 대한 책임은 사용자에게 있습니다.
            </Message.Item>
          </Message.List>
        </Message>

        <Trim
          base_selected={this.state.base_selected}
          trims={this.state.trims}
          calcTotalPrice={this.calcTotalPrice}
          onChange={this.onTrimChange}
        />

        <Responsive
          as={Segment}
          basic
          minWidth={Responsive.onlyTablet.minWidth}
        >
          <Grid columns={2} relaxed="very">
            <Grid.Column>
              <Form>
                <Form.Group>
                  <Color
                    color_selected={this.state.color_selected}
                    options={this.state.options}
                    calcTotalPrice={this.calcTotalPrice}
                    onChange={this.onColorChange}
                  />
                </Form.Group>
                <Form.Group>
                  <Wheal
                    performance={
                      this.state.base_selected === this.state.performance_index
                    }
                    wheal_selected={this.state.wheal_selected}
                    options={this.state.options}
                    calcTotalPrice={this.calcTotalPrice}
                    onChange={this.onWhealChange}
                  />
                </Form.Group>
                <Form.Group>
                  <Interior
                    interior_selected={this.state.interior_selected}
                    options={this.state.options}
                    calcTotalPrice={this.calcTotalPrice}
                    onChange={this.onInteriorChange}
                  />
                </Form.Group>
                <Form.Group>
                  <AutoPilot
                    autopilot_selected={this.state.autopilot_selected}
                    options={this.state.options}
                    calcTotalPrice={this.calcTotalPrice}
                    onChange={this.onAutoPilotChange}
                  />
                </Form.Group>

                <Divider hidden />
                <Form.Group>
                  <div style={{ width: "100%" }}>
                    <Header sub>전기차 보조금</Header>
                    <Dropdown
                      fluid
                      deburr
                      options={this.state.subsidy_list.map((v, i) => {
                        return {
                          key: i,
                          value: i,
                          text: `${v.name} (${this.comma(v.subsidy)}원)`
                        };
                      })}
                      placeholder="보조금 계산을 위해 거주지를 선택하세요"
                      selection
                      search
                      onChange={(e, { value }) => {
                        this.setState({
                          local_subsidy: this.state.subsidy_list[value].subsidy
                        });
                      }}
                    />
                  </div>
                </Form.Group>
              </Form>
            </Grid.Column>
            <Grid.Column>
              <Tab
                menu={{ secondary: true, pointing: true }}
                panes={[
                  {
                    menuItem: "현금",
                    render: () => (
                      <Cash
                        total_price={this.state.total_price}
                        gov_subsidy={this.state.gov_subsidy}
                        local_subsidy={this.state.local_subsidy}
                        calcFuncs={this.calcFuncs}
                      />
                    )
                  },
                  {
                    menuItem: "할부",
                    render: () => <Loan calcFuncs={this.calcFuncs} />
                  }
                ]}
              />
            </Grid.Column>
          </Grid>
          <Divider vertical>Calc</Divider>
        </Responsive>

        <Responsive {...Responsive.onlyMobile}>
          <Color
            color_selected={this.state.color_selected}
            options={this.state.options}
            calcTotalPrice={this.calcTotalPrice}
            onChange={this.onColorChange}
          />
          <Wheal
            performance={
              this.state.base_selected === this.state.performance_index
            }
            wheal_selected={this.state.wheal_selected}
            options={this.state.options}
            calcTotalPrice={this.calcTotalPrice}
            onChange={this.onWhealChange}
          />
          <Interior
            interior_selected={this.state.interior_selected}
            options={this.state.options}
            calcTotalPrice={this.calcTotalPrice}
            onChange={this.onInteriorChange}
          />
          <AutoPilot
            autopilot_selected={this.state.autopilot_selected}
            options={this.state.options}
            calcTotalPrice={this.calcTotalPrice}
            onChange={this.onAutoPilotChange}
          />

          <Divider hidden />

          <div style={{ width: "100%" }}>
            <Header sub>전기차 보조금</Header>
            <Dropdown
              fluid
              deburr
              options={this.state.subsidy_list.map((v, i) => {
                return {
                  key: i,
                  value: i,
                  text: `${v.name} (${this.comma(v.subsidy)}원)`
                };
              })}
              placeholder="보조금 계산을 위해 거주지를 선택하세요"
              selection
              search
              onChange={(e, { value }) => {
                this.setState({
                  local_subsidy: this.state.subsidy_list[value].subsidy
                });
              }}
            />
          </div>

          <Divider hidden />

          <Tab
            menu={{ secondary: true, pointing: true }}
            panes={[
              {
                menuItem: "현금",
                render: () => (
                  <Cash
                    total_price={this.state.total_price}
                    gov_subsidy={this.state.gov_subsidy}
                    local_subsidy={this.state.local_subsidy}
                    calcFuncs={this.calcFuncs}
                  />
                )
              },
              {
                menuItem: "할부",
                render: () => <Loan calcFuncs={this.calcFuncs} />
              }
            ]}
          />
        </Responsive>
      </Segment>
    );
  }
}