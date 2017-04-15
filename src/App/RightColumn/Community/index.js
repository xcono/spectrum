import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { FlexCol } from '../../../shared/Globals';
import Icon from '../../../shared/Icons';
import { getFrequency, getFeaturedFrequencies } from '../../../db/frequencies';
import {
  unsubscribeFrequency,
  subscribeFrequency,
} from '../../../actions/frequencies';
import { GoopyThree } from '../../../Homepage/style';
import {

} from './style';

class CommunityDetailView extends Component {

  unsubscribeFrequency = () => {
    this.props.dispatch(unsubscribeFrequency(this.props.activeFrequency));
  };

  subscribeFrequency = (frequencyId, communityId) => {
    this.props.dispatch(
      subscribeFrequency(
        {
          frequencyId,
          communityId,
        },
        false,
      ),
    );
  };

  componentDidMount = () => {
    const { user: { frequencies } } = this.props;

  render() {
    const { user: { frequencies } } = this.props;

    return (
      <ViewContainer>
        <ScrollBody>
          <ViewHeader>
            <ViewTitle>Explore</ViewTitle>
            <ViewSubtitle>
              Discover more of what Spectrum has to offer!
            </ViewSubtitle>
            <Constellations />
            <GoopyThree />
          </ViewHeader>
          <Section>
            <SectionTitle>
              Best of beta
            </SectionTitle>
            <SectionSubtitle>
              The 30 most-popular pre-launch frequencies
            </SectionSubtitle>
            <Row>
              {this.state.allFrequencies &&
                this.state.allFrequencies.map((freq, i) => {
                  return (
                    <Item key={i} active={frequencies[freq.id]}>
                      <FlexCol>
                        <ItemTitle>
                          ~{freq.name}
                        </ItemTitle>
                        <ItemMeta>
                          {Object.keys(freq.users).length} followers
                        </ItemMeta>
                        <ItemCopy>{freq.description}</ItemCopy>
                      </FlexCol>
                      {frequencies[freq.id]
                        ? <ButtonContainer>
                            <Icon
                              icon="checked"
                              color="success.default"
                              static
                            />
                            <ItemButton active>
                              Subscribed!
                            </ItemButton>
                          </ButtonContainer>
                        : <ButtonContainer>
                            <ItemButton
                              id={freq.slug}
                              onClick={() =>
                                this.subscribeFrequency(
                                  freq.id,
                                  freq.communityId,
                                )}
                            >
                              Follow
                            </ItemButton>
                          </ButtonContainer>}
                    </Item>
                  );
                })}
            </Row>
          </Section>
          <Section>
            <SectionTitle>
              5 cool ways to use frequencies
            </SectionTitle>
            <SectionSubtitle>
              News, journaling, communities, show and tell, and recommendations...
            </SectionSubtitle>
            <Row>
              {this.state.curatedFrequencies &&
                this.state.curatedFrequencies.map((freq, i) => {
                  const { communitySlug } = CURATED_FREQUENCIES.find(
                    curated => curated.slug === freq.slug,
                  );
                  return (
                    <Item key={i} active={frequencies[freq.id]}>
                      <FlexCol>
                        <ItemTitle>
                          <Link to={`/${communitySlug}/~${freq.slug}`}>
                            ~{freq.name}
                          </Link>
                        </ItemTitle>
                        <ItemMeta>
                          {Object.keys(freq.users).length} followers
                        </ItemMeta>
                        <ItemCopy>{freq.description}</ItemCopy>
                      </FlexCol>
                      {frequencies[freq.id]
                        ? <ButtonContainer>
                            <Icon
                              icon="checked"
                              color="success.default"
                              static
                            />
                            <Link to={`/${communitySlug}/~${freq.slug}`}>
                              <ItemButton active>
                                Go to {`~${freq.slug}`}
                              </ItemButton>
                            </Link>
                          </ButtonContainer>
                        : <ButtonContainer>
                            <ItemButton
                              id={freq.slug}
                              onClick={() =>
                                this.subscribeFrequency(
                                  freq.id,
                                  freq.communityId,
                                )}
                            >
                              Follow
                            </ItemButton>
                          </ButtonContainer>}
                    </Item>
                  );
                })}
            </Row>
          </Section>
          <Section>
            <SectionTitle>
              For developers
            </SectionTitle>
            <SectionSubtitle>
              Programming languages, hot frameworks, podcasts, blogs, and more...
            </SectionSubtitle>
            <Row>
              {this.state.developerFrequencies &&
                this.state.developerFrequencies.map((freq, i) => {
                  const { communitySlug } = DEVELOPER_FREQUENCIES.find(
                    curated => curated.slug === freq.slug,
                  );
                  return (
                    <Item key={i} active={frequencies[freq.id]}>
                      <FlexCol>
                        <ItemTitle>
                          <Link to={`/${communitySlug}/~${freq.slug}`}>
                            ~{freq.name}
                          </Link>
                        </ItemTitle>
                        <ItemMeta>
                          {Object.keys(freq.users).length} followers
                        </ItemMeta>
                        <ItemCopy>{freq.description}</ItemCopy>
                      </FlexCol>
                      {frequencies[freq.id]
                        ? <ButtonContainer>
                            <Icon
                              icon="checked"
                              color="success.default"
                              static
                            />
                            <Link to={`/${communitySlug}/~${freq.slug}`}>
                              <ItemButton active>
                                Go to {`~${freq.slug}`}
                              </ItemButton>
                            </Link>
                          </ButtonContainer>
                        : <ButtonContainer>
                            <ItemButton
                              id={freq.slug}
                              onClick={() =>
                                this.subscribeFrequency(
                                  freq.id,
                                  freq.communityId,
                                )}
                            >
                              Follow
                            </ItemButton>
                          </ButtonContainer>}
                    </Item>
                  );
                })}
            </Row>
          </Section>
          <Section>
            <SectionTitle>
              For designers
            </SectionTitle>
            <SectionSubtitle>
              Resources, inspiration, critique, podcasts, and more...
            </SectionSubtitle>
            <Row>
              {this.state.designerFrequencies &&
                this.state.designerFrequencies.map((freq, i) => {
                  const { communitySlug } = DESIGNER_FREQUENCIES.find(
                    curated => curated.slug === freq.slug,
                  );
                  return (
                    <Item key={i} active={frequencies[freq.id]}>
                      <FlexCol>
                        <ItemTitle>
                          <Link to={`/${communitySlug}/~${freq.slug}`}>
                            ~{freq.name}
                          </Link>
                        </ItemTitle>
                        <ItemMeta>
                          {Object.keys(freq.users).length} followers
                        </ItemMeta>
                        <ItemCopy>{freq.description}</ItemCopy>
                      </FlexCol>
                      {frequencies[freq.id]
                        ? <ButtonContainer>
                            <Icon
                              icon="checked"
                              color="success.default"
                              static
                            />
                            <Link to={`/${communitySlug}/~${freq.slug}`}>
                              <ItemButton active>
                                Go to {`~${freq.slug}`}
                              </ItemButton>
                            </Link>
                          </ButtonContainer>
                        : <ButtonContainer>
                            <ItemButton
                              id={freq.slug}
                              onClick={() =>
                                this.subscribeFrequency(
                                  freq.id,
                                  freq.communityId,
                                )}
                            >
                              Follow
                            </ItemButton>
                          </ButtonContainer>}
                    </Item>
                  );
                })}
            </Row>
          </Section>
          <Section>
            <SectionTitle>
              Just for funsies
            </SectionTitle>
            <SectionSubtitle>
              Bond with the community over our favorite things to do after hours!
            </SectionSubtitle>
            <Row>
              {this.state.afterHoursFrequencies &&
                this.state.afterHoursFrequencies.map((freq, i) => {
                  const { communitySlug } = AFTER_HOUR_FREQUENCIES.find(
                    curated => curated.slug === freq.slug,
                  );
                  return (
                    <Item key={i} active={frequencies[freq.id]}>
                      <FlexCol>
                        <ItemTitle>
                          <Link to={`/${communitySlug}/~${freq.slug}`}>
                            ~{freq.name}
                          </Link>
                        </ItemTitle>
                        <ItemMeta>
                          {Object.keys(freq.users).length} followers
                        </ItemMeta>
                        <ItemCopy>{freq.description}</ItemCopy>
                      </FlexCol>
                      {frequencies[freq.id]
                        ? <ButtonContainer>
                            <Icon
                              icon="checked"
                              color="success.default"
                              static
                            />
                            <Link to={`/${communitySlug}/~${freq.slug}`}>
                              <ItemButton active>
                                Go to {`~${freq.slug}`}
                              </ItemButton>
                            </Link>
                          </ButtonContainer>
                        : <ButtonContainer>
                            <ItemButton
                              id={freq.slug}
                              onClick={() =>
                                this.subscribeFrequency(
                                  freq.id,
                                  freq.communityId,
                                )}
                            >
                              Follow
                            </ItemButton>
                          </ButtonContainer>}
                    </Item>
                  );
                })}
            </Row>
          </Section>
          <Section>
            <SectionTitle>
              Need help?
            </SectionTitle>
            <SectionSubtitle>
              We've got your back in our support frequencies...
            </SectionSubtitle>
            <Row>
              {this.state.supportFrequencies &&
                this.state.supportFrequencies.map((freq, i) => {
                  const { communitySlug } = SUPPORT_FREQUENCIES.find(
                    curated => curated.slug === freq.slug,
                  );
                  return (
                    <Item key={i} active={frequencies[freq.id]}>
                      <FlexCol>
                        <ItemTitle>
                          <Link to={`/${communitySlug}/~${freq.slug}`}>
                            ~{freq.name}
                          </Link>
                        </ItemTitle>
                        <ItemMeta>
                          {Object.keys(freq.users).length} followers
                        </ItemMeta>
                        <ItemCopy>{freq.description}</ItemCopy>
                      </FlexCol>
                      {frequencies[freq.id]
                        ? <ButtonContainer>
                            <Icon
                              icon="checked"
                              color="success.default"
                              static
                            />
                            <Link to={`/${communitySlug}/~${freq.slug}`}>
                              <ItemButton active>
                                Go to {`~${freq.slug}`}
                              </ItemButton>
                            </Link>
                          </ButtonContainer>
                        : <ButtonContainer>
                            <ItemButton
                              id={freq.slug}
                              onClick={() =>
                                this.subscribeFrequency(
                                  freq.id,
                                  freq.communityId,
                                )}
                            >
                              Follow
                            </ItemButton>
                          </ButtonContainer>}
                    </Item>
                  );
                })}
            </Row>
          </Section>
        </ScrollBody>
      </ViewContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(Explore);
