import { withProviders } from 'src/client/hocs/withProviders'
import { Input } from 'src/client/uiKit/input/input'
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

      <style jsx>{`
        .wrapper {
          display: flex;
          flex-direction: column;
          margin-top: 25vh;
        }

        .longLink {
          display: flex;
        }

        .quickLink {
          margin-top: 40px;
          display: flex;
        }
      `}</style>
    </div>
  )
}, QuickLinkContainer.Provider)
