<radSideDrawer bind:this={drawer}>
    <radSideDrawer.drawerContent>
        <gridLayout rows="auto, *" >
            <label row="0" padding="10" class="h2" horizontalAlignment="left">Examples</label>
            <label row="0" class="fas h2" text="&#xf00d;" padding="10" horizontalAlignment="right" on:tap={() => drawer.closeDrawer()} />
            <scrollView row="1" >
                <stackLayout>
                    <label text="List View" class:current={$current_page == ListViewPage} padding="10" on:tap="{() => gotoPage(ListViewPage)}" />
                    <label text="Calendar" class:current={$current_page == CalendarPage} padding="10" on:tap="{() => gotoPage(CalendarPage)}" />
                    <label text="Chart" class:current={$current_page == ChartPage} padding="10" on:tap="{() => gotoPage(ChartPage)}" />
                    <label text="Data Form" class:current={$current_page == DataFormPage} padding="10" on:tap="{() => gotoPage(DataFormPage)}" />
                    <label text="GaugePage" class:current={$current_page == GaugePage} padding="10" on:tap="{() => gotoPage(GaugePage)}" />
                    <label text="AutoCompletePage" class:current={$current_page == AutoCompletePage} padding="10" on:tap="{() => gotoPage(AutoCompletePage)}" />
                </stackLayout>
            </scrollView>
        </gridLayout>
    </radSideDrawer.drawerContent>
    <radSideDrawer.mainContent>
        <frame id="navframe" defaultPage={ListViewPage}></frame>
    </radSideDrawer.mainContent>
</radSideDrawer>

<script>
    import { onMount } from 'svelte'
    import * as nav from './Nav'
    import ListViewPage from './pages/ListViewPage.svelte'
    import CalendarPage from './pages/CalendarPage.svelte'
    import ChartPage from './pages/ChartPage.svelte'
    import DataFormPage from './pages/DataFormPage.svelte'
    import GaugePage from './pages/GaugePage.svelte'
    import AutoCompletePage from './pages/AutoCompletePage.svelte'

    function gotoPage(page) {
        drawer.closeDrawer();
        nav.goto(page);
    }
    
    let drawer;
    let current_page = nav.current_page

    onMount(() => {
        nav.init("navframe", drawer, ListViewPage)
    })

</script>

<style>
    .current {
        font-weight: bold;
    }
</style>
