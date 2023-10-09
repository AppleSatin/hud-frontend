fx_version 'cerulean'

game "gta5"

author ""
version '0.0.1'

lua54 'yes'
use_fxv2_oal 'yes'

ui_page 'html/index.html'
-- ui_page 'http://localhost:3000/' --for dev

client_script {'client/**', '@ox_core/imports/client.lua' }
server_script {'@ox_core/imports/server.lua', "server/**"}
shared_script {'@ox_lib/init.lua', "shared/**"}

files {'html/**'}