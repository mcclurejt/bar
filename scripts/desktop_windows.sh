#! /bin/sh

# current desktop id
DESKTOP_ID=`chunkc tiling::query -d id`;

# current monitor id
MONITOR_ID=`chunkc tiling::query --monitor-for-desktop $DESKTOP_ID`;

# list of desktops for each monitor
DESKTOP_LIST=`chunkc tiling::query --desktops-for-monitor $MONITOR_ID`;

# list of windows for each desktop
# | tr '"' "'"
WINDOW_LIST=''
DESKTOP_LIST=${DESKTOP_LIST// /$'\n'} # change spaces to newline
for DESKTOP in $DESKTOP_LIST
do
  WINDOW_LIST+=`chunkc tiling::query --windows-for-desktop $DESKTOP`;
  WINDOW_LIST+=';';
done

# reformat the list to be entries of windows
WINDOW_LIST=${WINDOW_LIST//;/$'\n'}
echo "$WINDOW_LIST"
