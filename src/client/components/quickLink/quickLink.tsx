import { withProviders } from 'src/client/hocs/withProviders'
import { Input } from 'src/client/uiKit/input/input'
import { Button } from '../../uiKit/button/button'
import { QuickLinkContainer } from './quickLink.container'

export const QuickLink = withProviders(() => {
  const { state, actions } = QuickLinkContainer.useContainer()

  return (
    <div className="wrapper">
      <Button
        alignSelf="center"
        loading={state.loading}
        onClick={actions.createQuickLink}
      >
        Создать короткую ссылку
      </Button>

      <div className="token">
        <Input
          value={state.quickLink}
          placeholder="Ссылка появится здесь"
          onChange={() => {}}
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

        .token {
          margin-top: 40px;
          display: flex;
        }
      `}</style>
    </div>
  )
}, QuickLinkContainer.Provider)
