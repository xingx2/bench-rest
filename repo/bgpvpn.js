var bgpvpn_url = 'http://127.0.0.1:8181/controller/nb/v2/neutron/bgpvpns';
var bgpvpn_post_json = {
    "bgpvpn": {
        "status": "ACTIVE",
        "type": "l3",
        "name": "vpn1",
        "admin_state_up": true,
        "tenant_id": "9bacb3c5d39d41a79512987f338cf177",
        "route_targets": "64512:1",
        "networks": "3b80198d-4f7b-4f77-9ef5-774d54e17126",
        "auto_aggregate": true,
        "id": "4e8e5957-649f-477b-9e5b-"+"#{INDEX}"
    }
}



var bgpvpn_put_json = {
    "id": "4e8e5957-649f-477b-9e5b-"+"#{INDEX}",
    "bgpvpn": {
        "bgpvpn": {
            "status": "ACTIVE",
            "type": "l3",
            "name": "vpn-update",
            "admin_state_up": true,
            "tenant_id": "9bacb3c5d39d41a79512987f338cf177",
            "route_targets": "64512:1",
            "networks": "3b80198d-4f7b-4f77-9ef5-774d54e17126",
            "auto_aggregate": true,
            "id": "4e8e5957-649f-477b-9e5b-"+"#{INDEX}"
        }
    }
}


exports.bgpvpn_url = bgpvpn_url
exports.bgpvpn_post_json = bgpvpn_post_json
exports.bgpvpn_put_json = bgpvpn_put_json