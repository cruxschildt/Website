import { Card, Display, Grid, Link, Text, useTheme } from '@geist-ui/core';
import style from '../styles/components/cards.module.css';
import { TranslatableText } from './translation/TranslatableText';

interface DiscoverCardProps {
  title: string;
  description: string;
  link: string;
}

const discoverCard = ({ title, description, link }: DiscoverCardProps) => {
  const theme = useTheme();
  return (
    <Grid xs={12} justify="center" padding="5px">
      <Link color target="_blank" href={link}>
        <Card
          width="100%"
          height="200px"
          style={{ display: 'flex', justifyContent: 'center' }}
          className={style.card + ' ' + (theme.type == 'dark' ? style.card__dark : style.card__white)}
        >
          <Text h4>
            <TranslatableText>{title}</TranslatableText>
          </Text>
          <Text>
            <TranslatableText>{description}</TranslatableText>
          </Text>
        </Card>
      </Link>
    </Grid>
  );
};

export default discoverCard;
