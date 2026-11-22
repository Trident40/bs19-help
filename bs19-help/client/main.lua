-- ============================================================================
-- bs19-help | Client Entry Point (0.00ms Idle Resmon - Zero Wait(0) Loops)
-- Purely client-side player help menu with instant toggle response.
-- ============================================================================

local isMenuOpen = false

local function setMenuVisibility(visible)
    isMenuOpen = visible
    SetNuiFocus(visible, visible)

    if visible then
        SendNUIMessage({
            action = 'open',
            config = {
                menuTitle = Config.MenuTitle,
                menuSubtitle = Config.MenuSubtitle,
                defaultKey = Config.DefaultKey,
                commandName = Config.CommandName,
                footerRebindNote = Config.FooterRebindNote,
                gettingStarted = Config.GettingStarted,
                controls = Config.Controls,
                survivalMechanics = Config.SurvivalMechanics,
                commands = Config.Commands
            }
        })
    else
        SendNUIMessage({
            action = 'close'
        })
    end
end

local function toggleHelpMenu()
    if isMenuOpen then
        setMenuVisibility(false)
        return
    end

    -- Do not open if the pause menu is currently active
    if IsPauseMenuActive() then
        return
    end

    setMenuVisibility(true)
end

RegisterNUICallback('close', function(_, cb)
    setMenuVisibility(false)
    cb({ ok = true })
end)

-- Register /help and bind to F9 by default (players can rebind in FiveM settings)
RegisterCommand(Config.CommandName or 'help', function()
    toggleHelpMenu()
end, false)

RegisterKeyMapping(
    Config.CommandName or 'help',
    Config.KeyMappingDescription or 'Open BeyondSurvival Help & Controls',
    'keyboard',
    Config.DefaultKey or 'F9'
)

-- Ensure NUI focus is always released if the resource restarts while open
AddEventHandler('onResourceStop', function(resourceName)
    if GetCurrentResourceName() ~= resourceName then
        return
    end

    if isMenuOpen then
        SetNuiFocus(false, false)
        isMenuOpen = false
    end
end)
