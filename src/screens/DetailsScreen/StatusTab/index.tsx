import React from 'react';
import { View, Text } from 'react-native';
import { ProgressBar, Colors } from 'react-native-paper';

import { DivTab, TextBoldTab, TextRegularTab, ContainerStatus, StatusValueTab, StatusTotalTab } from './styles';

const StatusTab = (props: any) => (
  <ContainerStatus>
    <DivTab>
      <TextBoldTab>Vida</TextBoldTab>
      <StatusValueTab>
        <TextRegularTab>{props.pokemon?.stats[0].base_stat}</TextRegularTab>
        <ProgressBar
          progress={props.pokemon?.stats[0].base_stat / 150}
          color={Colors.red600}
          style={{ width: 100, marginLeft: 5, height: 2 }}
        />
      </StatusValueTab>
    </DivTab>
    <DivTab>
      <TextBoldTab>Ataque</TextBoldTab>
      <StatusValueTab>
        <TextRegularTab>{props.pokemon?.stats[1].base_stat}</TextRegularTab>
        <ProgressBar
          progress={props.pokemon?.stats[1].base_stat / 150}
          color={Colors.green400}
          style={{ width: 100, marginLeft: 5, height: 2 }}
        />
      </StatusValueTab>

    </DivTab>
    <DivTab>
      <TextBoldTab>Defesa</TextBoldTab>
      <StatusValueTab>
        <TextRegularTab>{props.pokemon?.stats[2].base_stat}</TextRegularTab>
        <ProgressBar
          progress={props.pokemon?.stats[2].base_stat / 150}
          color={Colors.red600}
          style={{ width: 100, marginLeft: 5, height: 2 }}
        />
      </StatusValueTab>
    </DivTab>
    <DivTab>
      <TextBoldTab>Ataque especial</TextBoldTab>
      <StatusValueTab>
        <TextRegularTab>{props.pokemon?.stats[3].base_stat}</TextRegularTab>
        <ProgressBar
          progress={props.pokemon?.stats[3].base_stat / 150}
          color={Colors.green400}
          style={{ width: 100, marginLeft: 5, height: 2 }}
        />
      </StatusValueTab>
    </DivTab>
    <DivTab>
      <TextBoldTab>Defesa especial</TextBoldTab>
      <StatusValueTab>
        <TextRegularTab>{props.pokemon?.stats[4].base_stat}</TextRegularTab>
        <ProgressBar
          progress={props.pokemon?.stats[4].base_stat / 150}
          color={Colors.green400}
          style={{ width: 100, marginLeft: 5, height: 2 }}
        />
      </StatusValueTab>
    </DivTab>
    <DivTab>
      <TextBoldTab>Rapidez</TextBoldTab>
      <StatusValueTab>
        <TextRegularTab>{props.pokemon?.stats[5].base_stat}</TextRegularTab>
        <ProgressBar
          progress={props.pokemon?.stats[5].base_stat / 150}
          color={Colors.green400}
          style={{ width: 100, marginLeft: 5, height: 2 }}
        />
      </StatusValueTab>
    </DivTab>
    <DivTab>
      <StatusTotalTab>Total</StatusTotalTab>
      <StatusTotalTab>
        {props.pokemon?.stats.reduce(
          (total: number, item: any) => total + item.base_stat,
          0
        )}
      </StatusTotalTab>
    </DivTab>
  </ContainerStatus>
);

export default StatusTab;
