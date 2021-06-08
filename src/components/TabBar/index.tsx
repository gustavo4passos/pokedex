import React from 'react';
import { NavigationState, Route, SceneRendererProps } from 'react-native-tab-view';

import { Container, Item, ItemText } from './styles';

interface TabBarProps extends SceneRendererProps {
  currentIndex: number
  navigationState: NavigationState<Route>
  setCurrentIndex: (index: number) => void
}

const TabBar: React.FC<TabBarProps> = ({ currentIndex, navigationState, setCurrentIndex, position }) => {
  const inputRange = navigationState.routes.map((route, i) => i);

  return (
    <Container>
      {navigationState.routes.map((route, i) => {
        const opacity = position.interpolate({
          inputRange,
          outputRange: inputRange.map((inputIndex) =>
            inputIndex === i ? 1 : 0.5
          )
        });

        return (
          <Item
            key={i}
            active={currentIndex === i}
            onPress={() => setCurrentIndex(i)}>
            <ItemText style={{ opacity }}>{route.title}</ItemText>
          </Item>
        );
      })}
    </Container>
  );
};

export default TabBar;
