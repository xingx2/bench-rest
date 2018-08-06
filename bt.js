var network = require('./repo/network.js');
var router = require('./repo/router.js');
var subnet = require('./repo/subnet.js');
var port = require('./repo/port.js');
var trunk = require('./repo/trunk.js');
var bgpvpn = require('./repo/bgpvpn.js');
var firewall = require('./repo/firewall.js');
var firewallpolicy = require('./repo/firewallpolicy.js');
var firewallrule = require('./repo/firewallrule.js');
var floatingip = require('./repo/floatingip.js');
var gateway = require('./repo/gateway.js');
var gatewayconnection = require('./repo/gatewayconnection.js');
var loadbalancer = require('./repo/loadbalancer.js');
var healthmonitor = require('./repo/loadbalancerhealthmonitor.js');
var listener = require('./repo/loadbalancerlistener.js');
var pool = require('./repo/loadbalancerpool.js');
var meteringlabel = require('./repo/meteringlabel.js');
var meteringrule = require('./repo/meteringrule.js');
var qospolicy = require('./repo/qospolicy.js');
var vpnservice = require('./repo/vpnservice.js');
var securitygroup = require('./repo/securitygroup.js');
var securitygrouprule = require('./repo/securitygrouprule.js');
var flowclassifier = require('./repo/sfcflowclassifier.js');
var portchain = require('./repo/sfcportchain.js');
var portpair = require('./repo/sfcportpair.js');
var portpairgroup = require('./repo/sfcportpairgroup.js');


var benchrest = require('./bench-rest.js')


var flow = {
  before: [],      // operations to do before anything
  beforeMain: [],  // operations to do before each iteration
    main: [
      //network
      { post: network.network_url, json: network.network_post_json},
      { get: network.network_url + "/4e8e5957-649f-477b-9e5b-" + "#{INDEX}"},
      { put: network.network_url + "/4e8e5957-649f-477b-9e5b-" + "#{INDEX}", json: network.network_put_json},
      { del: network.network_url + "/4e8e5957-649f-477b-9e5b-" + "#{INDEX}"},
      //router
      { post: router.router_url, json: router.router_post_json},
      { get: router.router_url + "/8604a0de-7f6b-409a-a47c-" + "#{INDEX}"},
      { put: router.router_url + "/8604a0de-7f6b-409a-a47c-" + "#{INDEX}", json: router.router_put_json},
      { del: router.router_url + "/8604a0de-7f6b-409a-a47c-" + "#{INDEX}"},
      //subnet
      { post: subnet.subnet_url, json: subnet.subnet_post_json},
      { get: subnet.subnet_url + "/3b80198d-4f7b-4f77-9ef5-" + "#{INDEX}"},
      { put: subnet.subnet_url + "/3b80198d-4f7b-4f77-9ef5-" + "#{INDEX}", json: subnet.subnet_put_json},
      { del: subnet.subnet_url + "/3b80198d-4f7b-4f77-9ef5-" + "#{INDEX}"},
      //port      
      { post: port.port_url, json: port.port_post_json},
      { get: port.port_url + "/65c0ee9f-d634-4522-8954-" + "#{INDEX}"},
      { put: port.port_url + "/65c0ee9f-d634-4522-8954-" + "#{INDEX}", json: port.port_put_json},
      { del: port.port_url + "/65c0ee9f-d634-4522-8954-" + "#{INDEX}"},
      //trunk
      { post: trunk.trunk_url, json: trunk.trunk_post_json},
      { get: trunk.trunk_url + "/c935240e-4aa6-496a-841c-" + "#{INDEX}"},
      { put: trunk.trunk_url + "/c935240e-4aa6-496a-841c-" + "#{INDEX}", json: trunk.trunk_put_json},
      { del: trunk.trunk_url + "/c935240e-4aa6-496a-841c-" + "#{INDEX}"},
      //bgpvpn
      { post: bgpvpn.bgpvpn_url, json: bgpvpn.bgpvpn_post_json},
      { get: bgpvpn.bgpvpn_url + "/4e8e5957-649f-477b-9e5b-" + "#{INDEX}"},
      { put: bgpvpn.bgpvpn_url + "/4e8e5957-649f-477b-9e5b-" + "#{INDEX}", json: bgpvpn.bgpvpn_put_json},
      { del: bgpvpn.bgpvpn_url + "/4e8e5957-649f-477b-9e5b-" + "#{INDEX}"},
      //firewall
      { post: firewall.firewall_url, json: firewall.firewall_post_json},
      { get: firewall.firewall_url + "/3b0ef8f4-82c7-44d4-a4fb-" + "#{INDEX}"},
      { put: firewall.firewall_url + "/3b0ef8f4-82c7-44d4-a4fb-" + "#{INDEX}", json: firewall.firewall_put_json},
      { del: firewall.firewall_url + "/3b0ef8f4-82c7-44d4-a4fb-" + "#{INDEX}"},
      //firewallpolicy
      { post: firewallpolicy.firewallpolicy_url, json: firewallpolicy.firewallpolicy_post_json},
      { get: firewallpolicy.firewallpolicy_url + "/c69933c1-b472-44f9-8226-" + "#{INDEX}"},
      { put: firewallpolicy.firewallpolicy_url + "/c69933c1-b472-44f9-8226-" + "#{INDEX}", json: firewallpolicy.firewallpolicy_put_json},
      { del: firewallpolicy.firewallpolicy_url + "/c69933c1-b472-44f9-8226-" + "#{INDEX}"},
      //firewallrule
      { post: firewallrule.firewallrule_url, json: firewallrule.firewallrule_post_json},
      { get: firewallrule.firewallrule_url + "/8722e0e0-9cc9-4490-9660-" + "#{INDEX}"},
      { put: firewallrule.firewallrule_url + "/8722e0e0-9cc9-4490-9660-" + "#{INDEX}", json: firewallrule.firewallrule_put_json},
      { del: firewallrule.firewallrule_url + "/8722e0e0-9cc9-4490-9660-" + "#{INDEX}"},
      //floatingip
      { post: floatingip.floatingip_url, json: floatingip.floatingip_post_json},
      { get: floatingip.floatingip_url + "/2f245a7b-796b-4f26-9cf9-" + "#{INDEX}"},
      { put: floatingip.floatingip_url + "/2f245a7b-796b-4f26-9cf9-" + "#{INDEX}", json: floatingip.floatingip_put_json},
      { del: floatingip.floatingip_url + "/2f245a7b-796b-4f26-9cf9-" + "#{INDEX}"},
      //gateway
      { post: gateway.gateway_url, json: gateway.gateway_post_json},
      { get: gateway.gateway_url + "/3b0ef8f4-82c7-44d4-a4fb-" + "#{INDEX}"},
      { put: gateway.gateway_url + "/3b0ef8f4-82c7-44d4-a4fb-" + "#{INDEX}", json: gateway.gateway_put_json},
      { del: gateway.gateway_url + "/3b0ef8f4-82c7-44d4-a4fb-" + "#{INDEX}"},
      //gatewayconnection
      { post: gatewayconnection.gatewayconnection_url, json: gatewayconnection.gatewayconnection_post_json},
      { get: gatewayconnection.gatewayconnection_url + "/3b0ef8f4-82c7-44d4-a4fb-" + "#{INDEX}"},
      { del: gatewayconnection.gatewayconnection_url + "/3b0ef8f4-82c7-44d4-a4fb-" + "#{INDEX}"},
      //loadbalancer
      { post: loadbalancer.loadbalancer_url, json: loadbalancer.loadbalancer_post_json},
      { get: loadbalancer.loadbalancer_url + "/a36c20d0-18e9-42ce-88fd-" + "#{INDEX}"},
      { put: loadbalancer.loadbalancer_url + "/a36c20d0-18e9-42ce-88fd-" + "#{INDEX}", json: loadbalancer.loadbalancer_put_json},
      { del: loadbalancer.loadbalancer_url + "/a36c20d0-18e9-42ce-88fd-" + "#{INDEX}"},
      //healthmonitor
      { post: healthmonitor.healthmonitor_url, json: healthmonitor.healthmonitor_post_json},
      { get: healthmonitor.healthmonitor_url + "/0a9ac99d-0a09-4b18-8499-" + "#{INDEX}"},
      { put: healthmonitor.healthmonitor_url + "/0a9ac99d-0a09-4b18-8499-" + "#{INDEX}", json: healthmonitor.healthmonitor_put_json},
      { del: healthmonitor.healthmonitor_url + "/0a9ac99d-0a09-4b18-8499-" + "#{INDEX}"},
      //listener
      { post: listener.listener_url, json: listener.listener_post_json},
      { get: listener.listener_url + "/39de4d56-d663-46e5-85a1-" + "#{INDEX}"},
      { put: listener.listener_url + "/39de4d56-d663-46e5-85a1-" + "#{INDEX}", json: listener.listener_put_json},
      { del: listener.listener_url + "/39de4d56-d663-46e5-85a1-" + "#{INDEX}"},
      //pool
      { post: pool.pool_url, json: pool.pool_post_json},
      { get: pool.pool_url + "/12ff63af-4127-4074-a251-" + "#{INDEX}"},
      { put: pool.pool_url + "/12ff63af-4127-4074-a251-" + "#{INDEX}", json: pool.pool_put_json},
      { del: pool.pool_url + "/12ff63af-4127-4074-a251-" + "#{INDEX}"},
      //meteringlabel
      { post: meteringlabel.meteringlabel_url, json: meteringlabel.meteringlabel_post_json},
      { get: meteringlabel.meteringlabel_url + "/bc91b832-8465-40a7-a5d8-" + "#{INDEX}"},
      { del: meteringlabel.meteringlabel_url + "/bc91b832-8465-40a7-a5d8-" + "#{INDEX}"},
      //meteringrule
      { post: meteringrule.meteringrule_url, json: meteringrule.meteringrule_post_json},
      { get: meteringrule.meteringrule_url + "/00e13b58-b4f2-4579-9c9c-" + "#{INDEX}"},
      { del: meteringrule.meteringrule_url + "/00e13b58-b4f2-4579-9c9c-" + "#{INDEX}"},
      //qospolicy
      { post: qospolicy.qospolicy_url, json: qospolicy.qospolicy_post_json},
      { get: qospolicy.qospolicy_url + "/d6220bbb-35f3-48ab-8eae-" + "#{INDEX}"},
      { put: qospolicy.qospolicy_url + "/d6220bbb-35f3-48ab-8eae-" + "#{INDEX}", json: qospolicy.qospolicy_put_json},
      { del: qospolicy.qospolicy_url + "/d6220bbb-35f3-48ab-8eae-" + "#{INDEX}"},
      //vpnservice
      { post: vpnservice.vpnservice_url, json: vpnservice.vpnservice_post_json},
      { get: vpnservice.vpnservice_url + "/9faaf49f-dd89-4e39-a8c6-" + "#{INDEX}"},
      { put: vpnservice.vpnservice_url + "/9faaf49f-dd89-4e39-a8c6-" + "#{INDEX}", json: vpnservice.vpnservice_put_json},
      { del: vpnservice.vpnservice_url + "/9faaf49f-dd89-4e39-a8c6-" + "#{INDEX}"},
      //securitygroup
      { post: securitygroup.securitygroup_url, json: securitygroup.securitygroup_post_json},
      { get: securitygroup.securitygroup_url + "/521e29d6-67b8-4b3c-8633-" + "#{INDEX}"},
      { put: securitygroup.securitygroup_url + "/521e29d6-67b8-4b3c-8633-" + "#{INDEX}", json: securitygroup.securitygroup_put_json},
      { del: securitygroup.securitygroup_url + "/521e29d6-67b8-4b3c-8633-" + "#{INDEX}"},
      //securitygrouprule
      { post: securitygrouprule.securitygrouprule_url, json: securitygrouprule.securitygrouprule_post_json},
      { get: securitygrouprule.securitygrouprule_url + "/9b4be7fa-e56e-40fb-9516-" + "#{INDEX}"},
      { put: securitygrouprule.securitygrouprule_url + "/9b4be7fa-e56e-40fb-9516-" + "#{INDEX}", json: securitygrouprule.securitygrouprule_put_json},
      { del: securitygrouprule.securitygrouprule_url + "/9b4be7fa-e56e-40fb-9516-" + "#{INDEX}"},
      //flowclassifier
      { post: flowclassifier.flowclassifier_url, json: flowclassifier.flowclassifier_post_json},
      { get: flowclassifier.flowclassifier_url + "/4e8e5957-649f-477b-9e5b-" + "#{INDEX}"},
      { put: flowclassifier.flowclassifier_url + "/4e8e5957-649f-477b-9e5b-" + "#{INDEX}", json: flowclassifier.flowclassifier_put_json},
      { del: flowclassifier.flowclassifier_url + "/4e8e5957-649f-477b-9e5b-" + "#{INDEX}"},
      //portchain
      { post: portchain.portchain_url, json: portchain.portchain_post_json},
      { get: portchain.portchain_url + "/4e8e5957-649f-477b-9e5b-" + "#{INDEX}"},
      { put: portchain.portchain_url + "/4e8e5957-649f-477b-9e5b-" + "#{INDEX}", json: portchain.portchain_put_json},
      { del: portchain.portchain_url + "/4e8e5957-649f-477b-9e5b-" + "#{INDEX}"},
      //portpair
      { post: portpair.portpair_url, json: portpair.portpair_post_json},
      { get: portpair.portpair_url + "/4e8e5957-649f-477b-9e5b-" + "#{INDEX}"},
      { put: portpair.portpair_url + "/4e8e5957-649f-477b-9e5b-" + "#{INDEX}", json: portpair.portpair_put_json},
      { del: portpair.portpair_url + "/4e8e5957-649f-477b-9e5b-" + "#{INDEX}"},
      //portpairgroup
      { post: portpairgroup.portpairgroup_url, json: portpairgroup.portpairgroup_post_json},
      { get: portpairgroup.portpairgroup_url + "/4e8e5957-649f-477b-9e5b-" + "#{INDEX}"},
      { put: portpairgroup.portpairgroup_url + "/4e8e5957-649f-477b-9e5b-" + "#{INDEX}", json: portpairgroup.portpairgroup_put_json},
      { del: portpairgroup.portpairgroup_url + "/4e8e5957-649f-477b-9e5b-" + "#{INDEX}"},
    ],
  afterMain: [],   // operations to do after each iteration
  after: []        // operations to do after everything is done
};


var runOptions = {
  limit: 10,         // concurrent connections
  iterations: 100,  // number of iterations to perform
  user: 'admin',
  password: 'admin'
};

benchrest(flow, runOptions)
  .on('error', function (err, ctxName) { console.error('Failed in %s with err: ', ctxName, err); })
  .on('progress', function (stats, percent, concurrent, ips) {
    console.log('Progress: %s complete', percent);
  })
  .on('end', function (stats, errorCount) {
    console.log('error count: ', errorCount);
    console.log('stats', stats);
  });