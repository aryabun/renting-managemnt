<template>
    <aside class="w-48 m-2 text-[var(--teal)]  p-3 rounded-2xl h-[calc(100vh-1rem)]bg-white/20 shadow-2xl backdrop-blur-md"">
        <div class="flex flex-col w-full">
            <div class="flex flex-row logo-section text-center justify-center p-5 w-full">Logo</div>
            <div class="flex flex-col py-2 text-slate-800">
                <p class="text-slate-500 pb-2">
                    General
                </p>
                <button class="flex flex-row gap-2 px-4 p-2 items-center rounded-2xl bg-[var(--teal)] text-amber-100">
                    <i class='bx bxs-dashboard'></i>
                    <p>Dashboard</p>
                </button>
            </div>
            <div class="flex flex-col py-2 text-slate-800">
                <p class="text-slate-500">
                    Property
                </p>
                <button class="flex flex-row gap-2 px-4 p-2 items-center rounded-2xl text-[var(--teal)]">
                    <i class='bx bx-building-house'></i>
                    <p>All Properties</p>
                </button>
                <button class="flex flex-row gap-2 px-4 p-2 items-center rounded-2xl text-[var(--teal)]">
                    <i class='bx bx-receipt'></i>
                    <p>Issue Billing</p>
                </button>
                <button class="flex flex-row gap-2 px-4 p-2 items-center rounded-2xl text-[var(--teal)]">
                    <i class='bx bxs-report'></i>
                    <p>Report</p>
                </button>
            </div>
            <div class="flex flex-col py-2 text-slate-800">
                <p class="text-slate-500 mb-2">
                    Other
                </p>
                <button class="flex flex-row gap-2 px-4 p-2 items-center rounded-2xl text-[var(--teal)]">
                   <i class='bx bxs-user-badge'></i>
                    <p>All Tenants</p>
                </button>
                <button class="flex flex-row gap-2 px-4 p-2 items-center rounded-2xl text-[var(--teal)]">
                    <i class='bx bx-calendar'></i>
                    <p>Schedule</p>
                </button>
                <button class="flex flex-row gap-2 px-4 p-2 items-center rounded-2xl text-[var(--teal)]">
                    <i class='bx bx-error'></i>
                    <p>Comment</p>
                </button>
            </div>
        </div>
    </aside>
</template>