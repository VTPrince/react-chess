import CreateInboxCodeDialog from 'features/nav/dialog/CreateInboxCodeDialog';
import EnterInboxCodeDialog from 'features/nav/dialog/EnterInboxCodeDialog';
import EventsStatsDialog from 'features/nav/dialog/EventsStatsDialog';
import OpeningsStatsDialog from 'features/nav/dialog/OpeningsStatsDialog';
import PlayersStatsDialog from 'features/nav/dialog/PlayersStatsDialog';
import SettingsDialog from 'features/nav/dialog/SettingsDialog';
import HelpDialog from 'features/nav/dialog/HelpDialog';

const NavDialogs = () => {
  return (
    <>
      <CreateInboxCodeDialog />
      <EnterInboxCodeDialog />
      <EventsStatsDialog />
      <OpeningsStatsDialog />
      <PlayersStatsDialog />
      <SettingsDialog />
      <HelpDialog />
    </>
  );
}

export default NavDialogs;
