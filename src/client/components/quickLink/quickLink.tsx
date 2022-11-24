import { withProviders } from 'src/client/hocs/withProviders'
import { Input } from 'src/client/uiKit/input/input'
import { Link } from 'src/client/uiKit/link'
import { Text } from 'src/client/uiKit/typography/text'
import { Title } from 'src/client/uiKit/typography/title'
import { Button } from '../../uiKit/button/button'
import { QuickLinkContainer } from './quickLink.container'

export const QuickLink = withProviders(() => {
  const { state, actions } = QuickLinkContainer.useContainer()

  return (
    <div className="wrapper">
      <div className="longLink">
        <Input
          maxWidth={280}
          value={state.longLink}
          placeholder="Вставьте ссылку"
          onChange={actions.setLongLink}
        />

        <Button
          ml={20}
          alignSelf="center"
          size="M"
          loading={state.loading}
          onClick={actions.createQuickLink}
        >
          Создать короткую ссылку
        </Button>
      </div>

      <div className="quickLink">
        <Input
          maxWidth={280}
          value={state.quickLink}
          placeholder="Короткая ссылка появится здесь"
        />

        <Button
          ml={20}
          size="M"
          theme="semiPrimary"
          onClick={actions.copyQuickLink}
        >
          Копировать
        </Button>
      </div>

      <div className="lastLinks">
        <Title size="M" mb={10}>
          Последние созданные ссылки:
        </Title>

        {state.lastQuickLinks.map((link) => (
          <div key={link.id}>
            <Link href={link.longLink} asText target="_blank">
              <Text size="S">{link.quickLink}</Text>
            </Link>
          </div>
        ))}

        {!state.lastQuickLinks.length && (
          <Text size="S" color="#a0a0a0">
            Ссылок пока нет. Создайте первую :)
          </Text>
        )}
      </div>

      <style jsx>{`
        .wrapper {
          display: flex;
          flex-direction: column;
          margin-top: 14vh;
        }

        .longLink {
          display: flex;
        }

        .quickLink {
          margin-top: 30px;
          display: flex;
        }

        .lastLinks {
          margin-top: 40px;
        }
      `}</style>
    </div>
  )
}, QuickLinkContainer.Provider)
