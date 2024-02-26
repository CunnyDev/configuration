import { cunnier, grantWriteAccess, team } from './lib'

// If you participated in our events and consider yourself a creator,
// feel free to add your username to the list below and be invited into
// the creatorsgarten organization.
//
// Once you are invited, please accept the invitation within 7 days,
// otherwise the invitation will expire.
//
// Once you are a member, you can go to the member list page at
// <https://github.com/orgs/cunnydev/people> and change the
// membership visibility to "Public." This will add the Creatorsgarten
// logo to your GitHub profile.
//
// As a member, you can also create Public and Private repositories
// in this organization when you work on related projects.
//
// Note that adding yourself to this list here doesn’t automatically
// grant you access to extra repositories beyond what you currently have
// access to. To access certain repositories, you must be a part of the
// respective team. The list of teams and their members are below this
// list.
//
// PLEASE KEEP THIS LIST SORTED ALPHABETICALLY.
//
cunnier('absolute-tk')
cunnier('chayapatr')
cunnier('Cloneee')
cunnier('DrowningToast')
cunnier('dtinth')
cunnier('goragod')
cunnier('Gusb3ll')
cunnier('heypoom')
cunnier('Kuuuuuuuu')
cunnier('Leomotors')
cunnier('miello')
cunnier('Mirailisc')
cunnier('mountainity')
cunnier('mrwan200')
cunnier('NakZaa')
cunnier('narze')
cunnier('palmcm')
cunnier('pathonscript')
cunnier('Qwenty228')
cunnier('rayriffy')
cunnier('ronnapatp')
cunnier('SaltyAom')
cunnier('Siravijbb')
cunnier('sleepntsheep')
cunnier('ST4RCHASER')
cunnier('thanhgaming5550')
cunnier('tinarskii')
cunnier('wasdee')
cunnier('WitMaster98')
cunnier('zunzureal')

//! Only edit the above lines and not the rest of this file.
const coreMembers = team('core-members', {
  name: 'Millennium',
  description: 'Core Members',
})

coreMembers('Gusb3ll')
coreMembers('Leomotors')
coreMembers('chayapatr')
coreMembers('narze')
coreMembers('rayriffy')
coreMembers('SaltyAom')
coreMembers('tinarskii')

grantWriteAccess('saltyaom', coreMembers)
grantWriteAccess('177013-commits', coreMembers)
grantWriteAccess('torpleng-anisong', coreMembers)
