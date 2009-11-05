function goPolycyManager(modal)
{
	var WINMAN = Components.classes['@mozilla.org/appshell/window-mediator;1'].getService(Components.interfaces.nsIWindowMediator);
	var target = WINMAN.getMostRecentWindow('policymanager:ManagerDialog');
	if (target) {
		target.focus();
	}
	else {
		var modalFlag = modal ? ',modal' : '' ;
		window.openDialog('chrome://policymanager/content/policymanager.xul', '_blank', 'chrome,all,dialog'+modalFlag);
	}
	return;
}

function goSelectPolicy()
{
	// �|���V�[�ݒ肪����Ȃ��ꍇ�A�|���V�[�}�l�[�W�����J��
	if (!PolicyService.policies.length) {
		goPolycyManager(true);
		// �|���V�[�ݒ肪����Ȃ������ꍇ�A���̂܂܏I��
		if (!PolicyService.policies.length)
			return;
	}
	window.openDialog('chrome://policymanager/content/selectPolicy.xul', '_blank', 'chrome,modal,centerscreen')
}
